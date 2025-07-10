import React from "react";
import { ModeToggle } from "@/components/ui/toggle.theme";
import Link from "next/link";
export default function HeaderDefault() {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-500 text-white dark:bg-red-400">
            <h1>Logo</h1>
            <ul className="flex space-x-4">
                <li>
                    <ModeToggle />
                </li>
                <li>
                    <Link href={"/login"}>Đăng nhập</Link>
                </li>
                <li><Link href={"/register"}>Đăng ký</Link></li>
            </ul>
        </div>
    );
}
