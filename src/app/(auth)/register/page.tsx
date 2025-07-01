"use client";
import React from "react";
import RegisterForm from "@/components/ui/form/registerForm";

function RegisterPage() {
    return (
           <div className="flex flex-col items-center justify-center h-screen">
               <h1 className="text-2xl font-bold mb-8">Đăng Ký Tài Khoản</h1>
               <div className="flex items-center justify-center w-1/5 mx-auto">
                   <RegisterForm />
               </div>
           </div>
       );
}

export default RegisterPage;
