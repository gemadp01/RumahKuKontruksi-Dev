// client/src/components/superadmin/Topbar.jsx
import React, { useState, useEffect } from "react";
import {
    FiBell,
    FiChevronDown,
    FiLogOut,
    FiSettings,
    FiUser,
} from "react-icons/fi";

import LogNotifikasi from "@client/components/ui/LogNotifikasi";
import notificationService from "@server/services/NotificationService";
import { dummyNotifications } from "@server/data/dummyNotifications";

const Topbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openNotif, setOpenNotif] = useState(false);
    const [notifList, setNotifList] = useState([]);

    useEffect(() => {
        // Initial dummy notifications
        setNotifList(dummyNotifications);

        // Subscribe realtime notifications
        const unsub = notificationService.subscribe((notif) => {
            setNotifList((prev) => [
                { ...notif, read: false },
                ...prev,
            ]);
        });

        return () => unsub();
    }, []);

    const unreadCount = notifList.filter((n) => !n.read).length;

    return (
        <header className="w-full h-16 bg-white border-b border-teal-100 shadow-sm flex items-center justify-between px-6 relative">

            <div className="text-lg font-semibold text-teal-700 tracking-wide">
                Super Admin Dashboard
            </div>

            <div className="flex items-center gap-6">

                {/* NOTIFICATION BUTTON */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setOpenNotif(!openNotif);
                            setOpenMenu(false);
                        }}
                        className="relative"
                    >
                        <FiBell className="text-teal-700 text-xl cursor-pointer hover:text-teal-900 transition" />

                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 w-2.5 h-2.5 rounded-full border border-white"></span>
                        )}
                    </button>

                    {openNotif && (
                        <div className="absolute right-0 mt-3">
                            <LogNotifikasi notifList={notifList} />
                        </div>
                    )}
                </div>

                {/* USER MENU */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setOpenMenu(!openMenu);
                            setOpenNotif(false);
                        }}
                        className="flex items-center gap-3"
                    >
                        <img
                            src="https://placehold.co/40"
                            className="w-10 h-10 rounded-full border border-teal-200 shadow-sm"
                        />
                        <div className="flex items-center gap-1 text-teal-700">
                            <span className="font-medium tracking-wide">
                                Super Admin
                            </span>
                            <FiChevronDown />
                        </div>
                    </button>

                    {openMenu && (
                        <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-teal-50 py-2 z-50">
                            <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-teal-50 transition">
                                <FiUser className="text-teal-700" />
                                Profil Saya
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-teal-50 transition">
                                <FiSettings className="text-teal-700" />
                                Pengaturan
                            </a>
                            <div className="border-t my-1" />
                            <a href="/logout" className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition">
                                <FiLogOut />
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Topbar;
