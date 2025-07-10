"use client";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    email: z
        .string()
        .email({ message: "Email không hợp lệ!" })
        .min(3, { message: "Vui lòng nhập email!" }),
    password: z
        .string()
        .min(4, { message: "Mật khẩu phải chứa ít nhất 4 ký tự" })
        .max(100, { message: "Mật khẩu tối đa 100 ký tự" }),
});

export default function LoginForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full mx-auto"
            // noValidate // nó có nghĩa là không dùng chức năng validate của nextjs và tự cấu hình bằng js hoặc ts
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                className="shadow-sm shadow-black/70"
                                    placeholder="Nhập email"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                            <FormLabel>Mât khẩu</FormLabel>
                            <FormControl>
                                <Input
                                className="shadow-sm shadow-black/70"
                                    placeholder="Nhập mât khẩu"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">Đăng nhập</Button>
            </form>
        </Form>
    );
}
