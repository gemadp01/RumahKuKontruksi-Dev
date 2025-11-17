// src/pages/superadmin/DashboardSuperadmin.jsx
import React from "react";
import { motion } from "framer-motion";

const DashboardSuperadmin = () => {
    const stats = [
        { label: "Proyek Berjalan", value: 12 },
        { label: "Proyek Selesai", value: 34 },
        { label: "Total Klien", value: 18 },
        { label: "Jumlah Tukang", value: 55 },
    ];

    const activities = [
        { id: 1, text: "Tukang A memperbarui progres proyek 002", time: "2 jam lalu" },
        { id: 2, text: "Klien B mengirim pesan terkait RAB", time: "5 jam lalu" },
        { id: 3, text: "Admin menambahkan proyek baru 011", time: "1 hari lalu" },
    ];

    const deadlines = [
        { id: "PK-001", name: "Renovasi Rumah Pak Dedi", progress: "80%", color: "bg-orange-400" },
        { id: "PK-002", name: "Pembangunan Ruko Bu Maya", progress: "60%", color: "bg-yellow-400" },
        { id: "PK-003", name: "Kontruksi Rumah Bapak Rian", progress: "45%", color: "bg-red-400" },
    ];

    return (
        <div className="w-full min-h-screen bg-[#F5F5F5] p-6">
            <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6">Dashboard Superadmin</h1>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {stats.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white shadow p-5 rounded-xl border-l-4 border-[#1A4D2E]"
                    >
                        <p className="text-sm text-gray-600">{item.label}</p>
                        <h2 className="text-2xl font-bold text-[#1A4D2E] mt-1">{item.value}</h2>
                    </motion.div>
                ))}
            </div>

            {/* Grafik Dummy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold mb-4 text-[#1A4D2E]">Progress Proyek</h2>
                    <div className="h-[260px] bg-gray-200 flex items-center justify-center rounded">
                        Chart Placeholder
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold mb-4 text-[#1A4D2E]">Pemasukan & Pengeluaran</h2>
                    <div className="h-[260px] bg-gray-200 flex items-center justify-center rounded">
                        Chart Placeholder
                    </div>
                </div>
            </div>

            {/* Aktivitas Terbaru & Deadline */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Aktivitas */}
                <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
                    <h2 className="text-lg font-semibold text-[#1A4D2E] mb-4">Aktivitas Terbaru</h2>
                    <div className="space-y-4">
                        {activities.map((a) => (
                            <div key={a.id} className="p-4 bg-[#E8DFCA] rounded-lg">
                                <p className="text-sm font-medium text-[#333]">{a.text}</p>
                                <p className="text-xs text-gray-600">{a.time}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Deadline */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold text-[#1A4D2E] mb-4">Deadline Terdekat</h2>
                    <div className="space-y-4">
                        {deadlines.map((d) => (
                            <div key={d.id} className="p-4 bg-[#F5F5F5] rounded-lg border">
                                <p className="font-semibold">{d.name}</p>
                                <div className="w-full h-2 bg-gray-300 rounded mt-2">
                                    <div
                                        className={`h-2 rounded ${d.color}`}
                                        style={{ width: d.progress }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{d.progress} selesai</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSuperadmin;
