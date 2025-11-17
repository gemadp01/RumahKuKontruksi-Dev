// client/src/admin/layout/SuperadminLayout.jsx
import React from "react";
import Sidebar from "../components/superadmin/Sidebar";
import Topbar from "../components/superadmin/Topbar";

const SuperadminLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-800">
            {/* SIDEBAR */}
            <Sidebar />

            {/* MAIN AREA */}
            <div className="flex flex-col flex-1 ml-72">
                {/* TOPBAR */}
                <Topbar />

                {/* CONTENT */}
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default SuperadminLayout;
