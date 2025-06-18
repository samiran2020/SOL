import { RefObject, useEffect, useState } from 'react';
import { ArrowDown, Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CommandList } from 'cmdk';
import { setPincodeData, useGetPincodeDDQuery } from '@/features/pincode/pincodeApi';

import { Spinner } from '@/components/ui/spinner';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useGetUserAddressListQuery } from '@/features/user-address/userAddressApi';

interface PincodeDropdownProps {
    popoverRef: RefObject<HTMLButtonElement>;
    setOpenMainPopover: React.Dispatch<React.SetStateAction<boolean>>;
    onPincodeSelect: (pincode: string) => void; // New prop
}

const PincodeDropdown: React.FC<PincodeDropdownProps> = ({ popoverRef, setOpenMainPopover, onPincodeSelect }) => {
    const [open, setOpen] = useState(false);
    const [pinCodeId, setPinCodeId] = useState<string>('');
    const { data: ddPincode, isLoading } = useGetPincodeDDQuery();
    const selectedPincode = useAppSelector((state) => state?.persistedReducers?.pincodeSlice?.pinCode);
    const [displayPincode, setDisplayPincode] = useState<string>(selectedPincode || 'Select Location'); // New state

    let authState = useAppSelector((state) => state.persistedReducers.authSlice);
    const userPincode = useGetUserAddressListQuery(undefined, {
        skip: authState.status === null && !authState.loading && !authState.error && authState.token === '',
        refetchOnMountOrArgChange: true,
    });
    const [isActive, setActive] = useState(false);
    const dispatch = useAppDispatch();
    const selectClass = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        if (selectedPincode !== null) {
            setPinCodeId(selectedPincode as string);
        }
    }, [selectedPincode]);

    useEffect(() => {
        // Open the main popover if no pincode is selected
        if (!selectedPincode) {
            setOpenMainPopover(true);
            if (popoverRef.current) {
                popoverRef.current.focus();
            }
        }
    }, [selectedPincode, setOpenMainPopover, popoverRef]);

    useEffect(() => {
        //Check if user pincode data exists and if Pincode has data
        if (userPincode?.data?.data?.length && ddPincode?.data) {
            const userPincodeValue = ddPincode?.data?.find(
                (pincode: any) => pincode?.id === userPincode?.data?.data[0]?.pincode?.id,
            )?.pincode;

            if (userPincodeValue) {
                setDisplayPincode(userPincodeValue);
                return;
            }
        }
        if (selectedPincode && ddPincode?.data) {
            const selectedPincodeValue = ddPincode?.data?.find(
                (pincode: any) => pincode?.id === selectedPincode,
            )?.pincode;
            if (selectedPincodeValue) {
                setDisplayPincode(selectedPincodeValue);
            }
        }
    }, [selectedPincode, ddPincode, userPincode]);

    const handleSelect = (pincodeId: string, pincodeValue: string) => {
        setPinCodeId(pincodeId);
        setDisplayPincode(pincodeValue);
        dispatch(setPincodeData(pincodeId));
        onPincodeSelect(pincodeValue);
        setOpen(false);
        setOpenMainPopover(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full text-xs sm:text-sm flex justify-between items-center bg-transparent border"
                    role="combobox"
                    aria-expanded={open}
                >
                    {/* Display the selected pincode based on pincodeId */}
                    {selectedPincode
                        ? ddPincode?.data?.find((pincode: any) => pincode.id === selectedPincode)?.pincode
                        : 'Select Pincode'}
                    {/* {displayPincode} */}
                    <ArrowDown className="ml-1 w-4 h-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="z-[1000] p-0">
                <Command className="w-full">
                    <CommandInput placeholder="Search Pincode" className="h-9 w-full" />
                    {isLoading ? (
                        <div className="p-4">
                            <Spinner />
                        </div>
                    ) : (
                        <>
                            <CommandEmpty>No Pincode found.</CommandEmpty>
                            <CommandGroup>
                                <CommandList className="max-h-[10rem] overflow-y-scroll">
                                    {ddPincode?.data?.map((pincode: any) => (
                                        <CommandItem
                                            disabled={false}
                                            key={pincode?.id}
                                            value={pincode?.pincode}
                                            // onSelect={() => {
                                            //     setPinCodeId(pincode?.id);
                                            //     dispatch(setPincodeData(pincode?.id));
                                            //     onPincodeSelect(pincode?.pincode); // Pass selected pincode text
                                            //     setOpen(false); // Close the dropdown
                                            //     setOpenMainPopover(false);
                                            // }}
                                            onSelect={() => handleSelect(pincode.id, pincode.pincode)}
                                            className="cursor-pointer"
                                        >
                                            {pincode?.pincode}
                                            <Check
                                                className={cn(
                                                    'ml-auto h-4 w-4',
                                                    pinCodeId === pincode?.id ? 'opacity-100' : 'opacity-0',
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandList>
                            </CommandGroup>
                        </>
                    )}
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default PincodeDropdown;
