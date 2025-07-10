"use client";

import React, { useEffect, useState } from "react";
import User from "@/types/user";
import { fetchUser } from "@/services/api/user";

export default function ClientHomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUser()
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (
    <div  className="flex items-center justify-center w-1/5 mx-auto flex-col">
      <p>
        Đây là nơi bạn có thể tìm thấy các thông tin và tính năng chính của ứng dụng.
      </p>

      <div>{users.length}</div>

      {users.length > 0 && users.map((user) => (
        <div key={user.id} className="p-4 border rounded mb-4">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p>ID: {user.id}</p>
        </div>
      ))}
    </div>
  );
}
