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
    username: z
        .string()
        .min(4, { message: "Username must be at least 4 characters" })
        .max(50),
    email: z
        .string()
        .email({ message: "Invalid email address" })
        .min(1, { message: "Email is required" })
        .max(100, { message: "Email must be less than 100 characters" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(100, { message: "Password must be less than 100 characters" }),
    confirmPassword: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(100, { message: "Password must be less than 100 characters" }),
});

export default function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full mx-auto"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                            <FormLabel>Tên đăng nhập</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Nhập tên đăng nhập"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
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
                                    placeholder="Nhập mât khẩu"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                            <FormLabel>Nhâp lại mật khâu</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Nhập lại mật khâu"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Đăng ký</Button>
            </form>
        </Form>
    );
}


