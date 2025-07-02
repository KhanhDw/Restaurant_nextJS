import React from "react";
import User from "@/types/user";
import { fetchUser } from "@/services/api/user";

export default async function HomePage() {

    const users = await fetchUser();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-8">Trang Chủ</h1>
            <p>Chào mừng bạn đến với trang chủ của ứng dụng!</p>
            <div className="flex items-center justify-center w-1/5 mx-auto">
                <p>
                    Đây là nơi bạn có thể tìm thấy các thông tin và tính năng
                    chính của ứng dụng.
                </p>

                <div>{users.length}</div>

                {users.map((user: User) => {
                    return (
                        <div key={user.id} className="p-4 border rounded mb-4">
                            <h2 className="text-xl font-semibold">{user.name}</h2>
                            <p>ID: {user.id}</p>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}



