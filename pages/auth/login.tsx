import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/store/hooks';
// import { UserLoginAuthForm } from '@/components/auth/login';
// import { UserSignupAuthForm } from '@/components/auth/signup';
import logo from '@/public/images/logo.png';
// import loginBg from '@/public/images/login-bg.jpg';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ClipLoader } from 'react-spinners';

// Dynamically import UserLoginAuthForm component
const UserLoginAuthForm = dynamic(() => import('@/components/auth/login'), {
    loading: () => (
        <div className="flex justify-center items-center h-screen">
            <ClipLoader color={'#123abc'} loading={true} size={50} />
        </div>
    ),
    ssr: false,
});
// Dynamically import UserSignupAuthForm component
const UserSignupAuthForm = dynamic(() => import('@/components/auth/signup'), {
    loading: () => (
        <div className="flex justify-center items-center h-screen">
            <ClipLoader color={'#123abc'} loading={true} size={50} />
        </div>
    ),
    ssr: false,
});
export default function AuthenticationPage() {
    const router = useRouter();
    let authState = useAppSelector((state) => state.persistedReducers.authSlice);
    useEffect(() => {
        if (authState.status === 'Fullfilled') {
            router.push('/');
        }
    });

    const [signIn, setSignIn] = useState(true);

    return (
        <div className="h-screen flex-col items-center justify-center flex  ">
            <div className="grid grid-cols-12  w-full h-fit sm:h-screen">
                <div className="col-span-12 sm:col-span-6 bg-[url('/images/login-bg.webp')] bg-cover bg-center "></div>
                <div className="col-span-12 sm:col-span-6  ">
                    <div className="flex gap-8 flex-col items-center justify-center  h-fit sm:h-screen">
                        <div className="cursor-pointer" onClick={() => router.push('/')}>
                            <Image src={logo} width={180} height={60} alt="logo" />
                        </div>
                        <div className="border border-borderColor p-0 sm:p-5 rounded-lg w-[80%] sm:w-[350px]">
                            <div className="mx-auto flex w-full flex-col justify-center space-y-6">
                                <div className="flex flex-col space-y-2 text-center">
                                    {/* <h1 className="sm:text-3xl text-2xl  font-bold tracking-tight mb-0 font-raleway">
                                Welcome {signIn ? 'Back' : ''}
                            </h1> */}
                                </div>
                                {signIn ? <UserLoginAuthForm /> : <UserSignupAuthForm />}
                                <p className="text-sm text-center pb-0">
                                    {signIn ? "Don't have an account ?" : 'Already have an account ?'}

                                    <span
                                        className="font-bold cursor-pointer my-2  bg-inherit"
                                        onClick={() => setSignIn(!signIn)}
                                    >
                                        {' '}
                                        {signIn ? 'Signup' : 'Login Now'}
                                    </span>
                                </p>
                                <p
                                    className="text-sm text-center pb-6 font-semibold cursor-pointer"
                                    onClick={() => router.push('/')}
                                >
                                    Back to home
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
