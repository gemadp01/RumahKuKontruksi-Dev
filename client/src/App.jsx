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

// ===== HALAMAN ADMIN =====
import AdminLayout from "./layouts/AdminLayout";
import DashboardAdmin from "./pages/admin/DashboardAdmin";

// ===== HALAMAN PENGAWAS =====
import PengawasLayout from "./layouts/PengawasLayout";
import DashboardPengawas from "./pages/pengawas/DashboardPengawas";

// ===== HALAMAN MANDOR =====
import MandorLayout from "./layouts/MandorLayout";
import DashboardMandor from "./pages/mandor/DashboardMandor";

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
        </Route>

        {/* ================== ADMIN LAYOUT ================== */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardAdmin />} />
        </Route>

        {/* ================== PENGAWAS LAYOUT ================== */}
        <Route path="/pengawas" element={<PengawasLayout />}>
          <Route path="dashboard" element={<DashboardPengawas />} />
        </Route>

        {/* ================== MANDOR LAYOUT ================== */}
        <Route path="/mandor" element={<MandorLayout />}>
          <Route path="dashboard" element={<DashboardMandor />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
