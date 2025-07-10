"use client";
import React, { useEffect, useState } from "react";
import LoginForm from "@/components/ui/form/loginForm";
import { useRouter } from 'next/navigation'
import { Link } from "lucide-react";
import { FcGoogle, FcUndo } from "react-icons/fc";
import { HiHome } from "react-icons/hi2";

function LoginPage() {
    const router = useRouter()

    useEffect(() => {
        router.prefetch('/home') // preload route trước khi user click
    }, [router])

    function RedictGoogleLogin() {
        router.push('/home')
    }

   

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="mb-5">
                <button onClick={RedictGoogleLogin} type="button" className="flex cursor-pointer rounded-4xl p-3  bg-gray-200 hover:bg-amber-500 duration-500 transition-all">
                    <HiHome className="text-3xl" />
                </button>
            </div>
            <h1 className="text-2xl font-bold mb-8">Đăng Nhập</h1>
            <div className="flex items-center justify-center w-1/5 mx-auto">
                <LoginForm />
            </div>
            <div className="mt-5 ">
                <button onClick={RedictGoogleLogin} type="button" className=" bg-white border-2 gap-2 rounded-xl w-72 px-4 py-2 shadow-sm shadow-black/50 flex items-center justify-center hover:bg-gray-200 duration-500 transition-all">
                    <FcGoogle className="text-2xl" /> <p>Đăng nhập bằng Google</p>
                </button>
            </div>
           
        </div>
    );
}

export default LoginPage;
