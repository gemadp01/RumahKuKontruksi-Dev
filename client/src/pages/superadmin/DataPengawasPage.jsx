// client/src/pages/superadmin/DataPengawasPage.jsx

import React, { useState } from "react";
import PengawasFilters from "../../components/pengawas/PengawasFilters";
import PengawasTable from "../../components/pengawas/PengawasTable";
import PengawasFormModal from "../../components/pengawas/PengawasFormModal";
import PengawasDetailDrawer from "../../components/pengawas/PengawasDetailDrawer";
import { Button } from "@client/components/ui/button";

const DataPengawasPage = () => {
    const [filters, setFilters] = useState({ search: "" });
    const [formOpen, setFormOpen] = useState(false);
    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [formData, setFormData] = useState({});

    // Dummy data, nanti bisa diganti API
    const pengawasList = [
        {
            id_pengawas: 1,
            kode_pengawas: "PGW0001",
            nama_lengkap: "Budi Santoso",
            nik: "123456789",
            no_telp: "08123456789",
            alamat: "Jl. Merdeka",
            foto: "",
            tanggal_bergabung: "2024-01-12"
        }
    ];

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Data Pengawas</h1>

                <Button onClick={() => { setFormData({}); setFormOpen(true); }}>
                    Tambah Pengawas
                </Button>
            </div>

            <PengawasFilters filters={filters} setFilters={setFilters} />

            <PengawasTable
                data={pengawasList}
                onDetail={(d) => { setSelectedData(d); setDetailOpen(true); }}
                onEdit={(d) => { setFormData(d); setFormOpen(true); }}
                onDelete={(d) => alert("Hapus " + d.nama_lengkap)}
            />

            <PengawasFormModal
                open={formOpen}
                onClose={() => setFormOpen(false)}
                formData={formData}
                setFormData={setFormData}
                onSubmit={() => alert("Simpan data")}
            />

            <PengawasDetailDrawer
                open={detailOpen}
                onClose={() => setDetailOpen(false)}
                data={selectedData}
            />
        </div>
    );
};

export default DataPengawasPage;
