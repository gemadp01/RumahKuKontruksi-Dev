// client/src/components/superadmin/Sidebar.jsx
import React, { useState } from "react";
import {
    FiHome,
    FiUsers,
    FiLayers,
    FiLogOut,
    FiFileText,
    FiCreditCard,
    FiChevronDown,
    FiChevronUp,
    FiSettings,
    FiActivity,
    FiBarChart2,
    FiChevronsLeft,
    FiChevronsRight,
} from "react-icons/fi";

const Sidebar = () => {
    const [openUserMenu, setOpenUserMenu] = useState(true);
    const [openPaymentMenu, setOpenPaymentMenu] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside
            className={`${isCollapsed ? "w-20" : "w-72"
                } fixed top-0 left-0 h-screen bg-teal-700 text-teal-50 shadow-xl flex flex-col overflow-y-auto z-50 transition-all duration-300`}
        >

            {/* COLLAPSE BUTTON */}
            <div className="flex items-center justify-between px-4 py-5 border-b border-teal-600">
                {!isCollapsed && (
                    <h1 className="text-xl font-bold tracking-wide text-white">
                        SuperAdmin
                    </h1>
                )}

                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 hover:bg-teal-600 rounded-lg transition"
                >
                    {isCollapsed ? (
                        <FiChevronsRight className="text-xl" />
                    ) : (
                        <FiChevronsLeft className="text-xl" />
                    )}
                </button>
            </div>

            {/* MENU */}
            <div className="flex-1 px-4 space-y-6 mt-4">

                {/* NAVIGATION TEXT */}
                {!isCollapsed && (
                    <p className="text-teal-200 text-xs uppercase tracking-widest mb-2 pl-2">
                        Navigasi
                    </p>
                )}

                {/* DASHBOARD */}
                <a
                    href="/admin/dashboard"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-600 transition group"
                >
                    <FiHome className="text-xl" />
                    {!isCollapsed && <span>Dashboard</span>}
                </a>

                {/* MANAJEMEN USER */}
                <div className="mt-3">
                    <button
                        onClick={() => setOpenUserMenu(!openUserMenu)}
                        className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-teal-600 transition"
                    >
                        <div className="flex items-center gap-3">
                            <FiUsers className="text-xl" />
                            {!isCollapsed && <span>Manajemen User</span>}
                        </div>

                        {!isCollapsed && (
                            openUserMenu ? (
                                <FiChevronUp className="text-lg" />
                            ) : (
                                <FiChevronDown className="text-lg" />
                            )
                        )}
                    </button>

                    {/* SUBMENU */}
                    {!isCollapsed && openUserMenu && (
                        <div className="ml-10 mt-2 flex flex-col gap-2">
                            <a href="/admin/user/super-admin" className="text-sm p-2 rounded hover:bg-teal-600 transition">Super Admin</a>
                            <a href="/admin/user/admin" className="text-sm p-2 rounded hover:bg-teal-600 transition">Admin</a>
                            <a href="/admin/user/pengawas" className="text-sm p-2 rounded hover:bg-teal-600 transition">Pengawas</a>
                            <a href="/admin/user/mandor" className="text-sm p-2 rounded hover:bg-teal-600 transition">Mandor</a>
                            <a href="/admin/user/konsumen" className="text-sm p-2 rounded hover:bg-teal-600 transition">Konsumen</a>
                            <a href="/admin/user/perusahaan" className="text-sm p-2 rounded hover:bg-teal-600 transition">Perusahaan & PIC</a>
                        </div>
                    )}
                </div>

                {/* PROYEK */}
                <a
                    href="/admin/proyek"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-600 transition group"
                >
                    <FiLayers className="text-xl" />
                    {!isCollapsed && <span>Proyek</span>}
                </a>

                {/* PROGRES PROYEK */}
                <a
                    href="/admin/progres-proyek"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-600 transition group"
                >
                    <FiBarChart2 className="text-xl" />
                    {!isCollapsed && <span>Progres Proyek</span>}
                </a>

                {/* RAB */}
                <a
                    href="/admin/rab"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-600 transition group"
                >
                    <FiFileText className="text-xl" />
                    {!isCollapsed && <span>RAB</span>}
                </a>

                {/* PEMBAYARAN */}
                <div className="mt-3">
                    <button
                        onClick={() => setOpenPaymentMenu(!openPaymentMenu)}
                        className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-teal-600 transition"
                    >
                        <div className="flex items-center gap-3">
                            <FiCreditCard className="text-xl" />
                            {!isCollapsed && <span>Pembayaran</span>}
                        </div>

                        {!isCollapsed && (
                            openPaymentMenu ? (
                                <FiChevronUp className="text-lg" />
                            ) : (
                                <FiChevronDown className="text-lg" />
                            )
                        )}
                    </button>

                    {!isCollapsed && openPaymentMenu && (
                        <div className="ml-10 mt-2 flex flex-col gap-2">
                            <a href="/admin/pembayaran/konsumen" className="text-sm p-2 rounded hover:bg-teal-600 transition">Pembayaran Konsumen</a>
                            <a href="/admin/pembayaran/mandor" className="text-sm p-2 rounded hover:bg-teal-600 transition">Pembayaran Mandor</a>
                        </div>
                    )}
                </div>

                {/* LOG AKTIVITAS */}
                <a
                    href="/admin/log-aktivitas"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-600 transition group"
                >
                    <FiActivity className="text-xl" />
                    {!isCollapsed && <span>Log Aktivitas</span>}
                </a>

                {/* PENGATURAN */}
                <a
                    href="/admin/pengaturan"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-600 transition group"
                >
                    <FiSettings className="text-xl" />
                    {!isCollapsed && <span>Pengaturan</span>}
                </a>
            </div>

            {/* LOGOUT */}
            <div className="border-t border-teal-600 pt-4 mb-4 px-4">
                <a
                    href="/logout"
                    className="flex items-center gap-3 p-3 rounded-lg text-red-100 hover:bg-teal-600 transition"
                >
                    <FiLogOut className="text-xl" />
                    {!isCollapsed && <span>Logout</span>}
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
