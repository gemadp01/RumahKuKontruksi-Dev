// client/src/pages/superadmin/DataAdminPage.jsx
import React, { useEffect, useState } from "react";
import AdminTable from "../../components/admin/AdminTable";
import supabase from "../../supabase-client";

export default function DataAdminPage() {
  const [admins, setAdmins] = useState([]);

  const fetchAdmins = async () => {
    try {
      const { error, data } = await supabase
        .from("tb_detail_admin")
        .select("*");
      if (error) throw new Error(error.message);

      setAdmins(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);
  return (
    <div className="p-6">
      {/* PAGE HEADER */}
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Data Admin</h1>
        <p className="text-slate-600">Kelola semua akun admin & superadmin.</p>
      </div>

      {/* TABLE COMPONENT */}
      <AdminTable data={admins} />
    </div>
  );
}
