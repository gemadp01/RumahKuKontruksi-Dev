// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ===== LAYOUTS =====
import MainLayout from "./layouts/MainLayout";
import KonsumenLayout from "./layouts/KonsumenLayout";
import SuperadminLayout from "./layouts/SuperAdminLayout";

// ===== HALAMAN UMUM =====
import Home from "./pages/Home";
import About from "./pages/Tentang";
import Contact from "./pages/Contact";

// ===== HALAMAN KONSUMEN =====
import TimelineProyek from "./pages/konsumen/TimelineProyek";
import Proyek from "./pages/konsumen/Proyek";
import Profil from "./pages/konsumen/Profil";

// ===== HALAMAN SUPER ADMIN =====
import DashboardSuperadmin from "./pages/superadmin/DashboardSuperadmin";
import DataAdmin from "./pages/superadmin/DataAdminPage";
import DataPengawas from "./pages/superadmin/DataPengawasPage";
import DataMandor from "./pages/superadmin/DataMandorPage";





function App() {
  return (
    <Router>
      <Routes>
        {/* ================== MAIN LAYOUT (UMUM) ================== */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ================== KONSUMEN LAYOUT ================== */}
        <Route path="/konsumen" element={<KonsumenLayout />}>
          <Route path="TimelineProyek" element={<TimelineProyek />} />
          <Route path="proyek" element={<Proyek />} />
          <Route path="profil" element={<Profil />} />
        </Route>

        {/* ================== SUPER ADMIN LAYOUT ================== */}
        <Route path="/superadmin" element={<SuperadminLayout />}>
          <Route path="dashboard" element={<DashboardSuperadmin />} />
          <Route path="data-admin" element={<DataAdmin />} />
          <Route path="data-pengawas" element={<DataPengawas />} />
          <Route path="data-mandor" element={<DataMandor />} />
       

        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
