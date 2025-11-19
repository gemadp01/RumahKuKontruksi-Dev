// client/src/pages/superadmin/DataMandorPage.jsx
import React from "react";
import MandorTable from "../../components/mandor/MandorTable";

export default function DataMandorPage() {
    // Dummy data — nanti bisa diganti dengan fetch API
    const dummyMandors = [
        {
            id_mandor: 1,
            kode_mandor: "MDR-0001",
            nama_lengkap: "Ahmad Fauzi",
            nik: "3201123456789012",
            email: "ahmad@example.com",
            no_hp: "081234567890",
            alamat: "Jl. Mawar No. 12, Jakarta",
            pengalaman_tahun: 5,
            status_aktif: true,
            foto: "https://placehold.co/200",
            tanggal_ditambahkan: "2024-01-10T10:00:00Z",
        },
        {
            id_mandor: 2,
            kode_mandor: "MDR-0002",
            nama_lengkap: "Siti Rahmawati",
            nik: "3201123456789013",
            email: "siti@example.com",
            no_hp: "081298765432",
            alamat: "Perumahan Indah Lestari Blok B-21",
            pengalaman_tahun: 3,
            status_aktif: false,
            foto: "https://placehold.co/200",
            tanggal_ditambahkan: "2024-02-05T08:00:00Z",
        },
    ];

    return (
        <div className="p-6">
            {/* PAGE HEADER */}
            <div className="mb-6 flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Data Mandor</h1>
                <p className="text-slate-600">
                    Kelola semua mandor proyek. Tambah, edit, lihat detail, atau hapus data mandor.
                </p>
            </div>

            {/* TABLE COMPONENT */}
            <MandorTable data={dummyMandors} />
        </div>
    );
}
