import React from "react";
import Navbar from "@/components/customer/home/navbar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;