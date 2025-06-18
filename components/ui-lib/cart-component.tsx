import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useState } from 'react';
import {
    useDecreaseQuantityMutation,
    useIncreaseQuantityMutation,
    useDeleteCartItemMutation,
} from '@/features/cart/cartApi';
import { toast } from 'sonner';
import { Wishlist } from '@/types/interfaces/wishlist';
import { TableCell } from '../ui/table';
import defaultProduct from '@/public/images/defaultProduct.png';

const CartComponent = ({ product, cartRefetch }: { product: Wishlist; cartRefetch: any }) => {
    const [selectedVariant, setSelectedVariant] = useState<Wishlist>(product);
    const [decreaseQuantity] = useDecreaseQuantityMutation();
    const [increaseQuantity] = useIncreaseQuantityMutation();
    const [deleteCartItem] = useDeleteCartItemMutation();

    const handleDecrease = async (id: string) => {
        try {
            let res = await decreaseQuantity(id).unwrap();
            if (res.statusCode === 201) {
                // toast.success(`🎉  ${res?.message}`);
                setSelectedVariant((prev) => ({ ...prev, cartProdQnt: prev?.cartProdQnt - 1 }));
                cartRefetch();
            } else {
                toast.error(` ${res?.message}`);
            }
        } catch (error: any) {
            console.log('🚀 ~ file: product-component.tsx:84 ~ handleAddToCart ~ error:', error);
            toast.error(`Please login to continue`);
        }
    };

    const handleIncrease = async (id: string) => {
        try {
            let res = await increaseQuantity(id).unwrap();
            if (res.statusCode === 201) {
                // toast.success(`🎉  ${res?.message}`);
                setSelectedVariant((prev) => ({ ...prev, cartProdQnt: prev?.cartProdQnt + 1 }));
                cartRefetch();
            } else {
                toast.error(` ${res?.message}`);
            }
        } catch (error: any) {
            console.log('🚀 ~ file: product-component.tsx:84 ~ handleAddToCart ~ error:', error);
            toast.error(`Please login to continue`);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            let res = await deleteCartItem(id).unwrap();
            if (res.statusCode === 201) {
                toast.success(`Item removed from cart`);
                cartRefetch();
            } else {
                toast.error(` ${res?.message}`);
            }
        } catch (error: any) {
            console.log('🚀 ~ file: product-component.tsx:84 ~ handleAddToCart ~ error:', error);
            toast.error(`Please login to continue`);
        }
    };

    return (
        <>
            <TableCell className="font-medium p-2">
                <Image
                    src={
                        selectedVariant?.product?.productImage ? selectedVariant?.product?.productImage : defaultProduct
                    }
                    width={60}
                    height={60}
                    className="h-full object-center"
                    alt="product"
                />
            </TableCell>
            <TableCell className="p-2">{selectedVariant?.product?.name}</TableCell>
            <TableCell className="text-center p-2">{selectedVariant?.variantMaster?.variantName}</TableCell>
            <TableCell className="text-center p-2">
                <span className="font-['Arial']">₹</span>
                {selectedVariant?.productVariant?.sellingPrice}
            </TableCell>
            <TableCell className="text-right p-2">
                <div className="flex items-center justify-center space-x-2">
                    <Button
                        onClick={() => handleDecrease(selectedVariant?.productId)}
                        variant="outline"
                        size="icon"
                        className="rounded-full h-6 w-6"
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <div className="flex-1 text-center text-md font-semibold">{selectedVariant?.cartProdQnt}</div>
                    <Button
                        onClick={() => handleIncrease(selectedVariant?.productId)}
                        variant="outline"
                        size="icon"
                        className="rounded-full h-6 w-6 bg-green-600 text-white"
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </TableCell>
            <TableCell className="text-center p-2">
                <span className="font-['Arial']">₹</span>
                {selectedVariant?.cartProdQnt * selectedVariant?.productVariant?.sellingPrice}
            </TableCell>
            <TableCell className="text-right p-2">
                <X className="cursor-pointer" onClick={() => handleDelete(selectedVariant?.productId)} />
            </TableCell>
        </>
    );
};

export default CartComponent;
