import React from "react";
import HeaderDefault from "@/components/ui/partials/header/headerDefault";
import FooterDefault from "@/components/ui/partials/footer/footerDefault";

function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderDefault />
            <main className="flex-1">{children}</main>
            <FooterDefault />
        </div>
    );
}

export default HomeLayout;
