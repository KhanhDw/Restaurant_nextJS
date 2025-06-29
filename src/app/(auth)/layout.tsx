import React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <h1>Auth layout</h1>
            {children}
        </div>
    );
};

export default AuthLayout;
