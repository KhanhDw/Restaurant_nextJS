"use client";
import React from "react";
import LoginForm from "@/components/ui/form/loginForm";

function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-8">Đăng Nhập</h1>
            <div className="flex items-center justify-center w-1/5 mx-auto">
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;
