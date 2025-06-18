import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';
import { Product, ProductProVariant } from '@/types/interfaces/product';
import {
    useAddToCartMutation,
    useDecreaseQuantityMutation,
    useGetAllCartItemQuery,
    useIncreaseQuantityMutation,
} from '@/features/cart/cartApi';
// import { useAddToWishlistMutation } from '@/features/wishlist/wishlistApi';
import { useAddToWishlistV2Mutation } from '@/features/product/productApi';
import { useGetAllWishlistItemQuery } from '@/features/wishlist/wishlistApi';

import { toast } from 'sonner';
import { Heart, Minus, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { useRouter } from 'next/router';
import defaultProduct from '@/public/images/defaultProduct.png';

const MobileProductComponent = ({ product }: { product: Product }) => {
    const customer = useAppSelector((state) => state.persistedReducers.authSlice?.data);
    const { refetch: refetchCart } = useGetAllCartItemQuery(
        { customerId: customer?.id },
        { refetchOnMountOrArgChange: true },
    );
    const { refetch: refetchWishlist } = useGetAllWishlistItemQuery(
        { customerId: customer?.id },
        { refetchOnMountOrArgChange: true },
    );

    const [selectedVariant, setSelectedVariant] = useState<ProductProVariant>(product?.productVariant[0]);
    const [addToCart] = useAddToCartMutation();
    const [decreaseQuantity] = useDecreaseQuantityMutation();
    const [increaseQuantity] = useIncreaseQuantityMutation();
    const [addToWishlist] = useAddToWishlistV2Mutation();
    const router = useRouter();

    const handleVariantChange = (variant: ProductProVariant) => {
        setSelectedVariant(variant);
    };

    const handleDecrease = async (id: string) => {
        try {
            let res = await decreaseQuantity(id).unwrap();
            if (res.statusCode === 201) {
                // toast.success(`🎉  ${res?.message}`);
                setSelectedVariant((prev) => ({ ...prev, cartProdQnt: prev?.cartProdQnt - 1 }));
                refetchCart();
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
            } else {
                toast.error(` ${res?.message}`);
            }
        } catch (error: any) {
            console.log('🚀 ~ file: product-component.tsx:84 ~ handleAddToCart ~ error:', error);
            toast.error(`Please login to continue`);
        }
    };

    const handleAddToCart = async (id: string) => {
        try {
            const payload = { productId: id, cartProdQnt: selectedVariant?.cartProdQnt + 1 };
            let res = await addToCart(payload).unwrap();
            if (res.statusCode === 201) {
                toast.success(`🎉  ${res?.message}`);
                setSelectedVariant((prev) => ({ ...prev, cartProdQnt: prev?.cartProdQnt + 1 }));
                refetchCart();
            } else {
                toast.error(` ${res?.message}`);
            }
        } catch (error: any) {
            console.log('🚀 ~ file: product-component.tsx:84 ~ handleAddToCart ~ error:', error);
            toast.error(`Please login to continue`);
        }
    };

    const handleAddToWishlist = async (id: string) => {
        try {
            const payload = { productId: id };
            let res = await addToWishlist(payload).unwrap();
            if (res.statusCode === 201) {
                setSelectedVariant((prevState) => ({ ...prevState, isWishlist: true }));
                toast.success(`Product added to wishlist`);
                refetchWishlist();
            } else if (res.statusCode === 200) {
                setSelectedVariant((prevState) => ({ ...prevState, isWishlist: false }));
                toast.success(`Product removed from wishlist`);
                refetchWishlist();
            } else {
                toast.error(` ${res?.message}`);
            }
        } catch (error: any) {
            console.log('🚀 ~ file: product-component.tsx:84 ~ handleAddToCart ~ error:', error);
            toast.error(`Please login to continue`);
        }
    };

    const handleRouteProductDetail = () => {
        router.push({
            pathname: `/product-detail/${product.id}`,
            query: {
                variantId: selectedVariant.id,
            },
        });
    };

    useEffect(() => {
        if (product?.productVariant) {
            setSelectedVariant(product.productVariant[0]);
        }
    }, [product]);

    return (
        <div className="group p-2 border">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 relative">
                <div className="productImg  max-h-full max-w-full sm:m-h-12">
                    {' '}
                    <Image
                        src={product.productImage ? product.productImage : defaultProduct}
                        width={400}
                        height={400}
                        className=" p-2 max-w-full h-28 sm:h-36 object-contain object-center"
                        alt="product"
                        onClick={() => handleRouteProductDetail()}
                    />
                </div>
                <div className="">
                    <Heart
                        fill={`${selectedVariant?.isWishlist === true ? 'red' : 'white'}`}
                        onClick={() => handleAddToWishlist(selectedVariant?.id)}
                        strokeWidth={0.75}
                        strokeOpacity={0.75}
                        size={20}
                        className={`absolute right-0 top-0 cursor-pointer ${selectedVariant?.isWishlist ? 'text-red-700' : ''}`}
                    />
                </div>
            </div>
            <h3
                className="mt-1 sm:mt-3 text-xs sm:text-sm text-gray-700 p-0 mb-1 line-clamp-1 one-line"
                onClick={() => handleRouteProductDetail()}
            >
                {product?.name}
            </h3>
            {product?.variantCount > 1 && product?.productVariant ? (
                <VarirantSelectComponent variantData={product?.productVariant} onVariantChange={handleVariantChange} />
            ) : (
                <h6 className="p-0 m-0 text-xs h-5 sm:h-6">{product?.productVariant[0]?.variantMaster?.variantName}</h6>
            )}
            <div className="mt-1 flex items-center justify-between">
                <span className="text-md font-normal text-green-800">
                    <span className="font-['Arial']">₹</span> {selectedVariant?.sellingPrice}
                </span>
                {selectedVariant?.cartProdQnt > 0 ? (
                    <div className="flex items-center justify-center space-x-2">
                        <Button
                            onClick={() => handleDecrease(selectedVariant?.id)}
                            variant="outline"
                            size="icon"
                            className="rounded-full h-6 w-6"
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <div className="flex-1 text-center text-md font-semibold">{selectedVariant?.cartProdQnt}</div>
                        <Button
                            onClick={() => handleIncrease(selectedVariant?.id)}
                            variant="outline"
                            size="icon"
                            className="rounded-full h-6 w-6 bg-green-600 text-white"
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                ) : (
                    <Button
                        onClick={() => handleAddToCart(selectedVariant?.id)}
                        variant="outline"
                        size="icon"
                        className="rounded-full h-6 w-6 bg-green-600 text-white"
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default MobileProductComponent;

const VarirantSelectComponent = ({
    variantData,
    onVariantChange,
}: {
    variantData: ProductProVariant[];
    onVariantChange: (variant: ProductProVariant) => void;
}) => {
    const [selectedVariant, setSelectedVariant] = useState<ProductProVariant>(variantData[0]);

    const handleVariantChange = (variantName: string) => {
        const selected = variantData.find((variant) => variant.variantMaster.variantName === variantName);
        if (selected) {
            setSelectedVariant(selected);
            onVariantChange(selected); // Pass the selected variant back to the parent
        }
    };

    return (
        <Select value={selectedVariant.variantMaster.variantName} onValueChange={handleVariantChange}>
            <SelectTrigger className="h-8 w-full text-xs">
                <SelectValue placeholder="Select Unit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Unit</SelectLabel>
                    {variantData.map((variant) => (
                        <SelectItem key={variant.id} value={variant.variantMaster.variantName}>
                            {variant.variantMaster.variantName}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
