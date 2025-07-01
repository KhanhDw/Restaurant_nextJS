"use client";
import React from "react";

function HomePage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-8">Trang Chủ</h1>
            <p>Chào mừng bạn đến với trang chủ của ứng dụng!</p>
            {/* Optional: Add a theme toggle button */}
            {/* <ToggleTheme /> */}
            <div className="flex items-center justify-center w-1/5 mx-auto">
                {/* You can add more components or content here */}
                <p>
                    Đây là nơi bạn có thể tìm thấy các thông tin và tính năng
                    chính của ứng dụng.
                </p>
            </div>
        </div>
    );
}

export default HomePage;
