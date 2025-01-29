import NotFound from "../NotFound";
import Dashboard from "./content/Dashboard";
import Home from "./content/home-page/Home";
import { Routes, Route } from 'react-router';
import Pengaduan from "./content/Pengaduan";
import StatusPengaduan from "./content/StatusPengaduan";
import InfoPengaduan from "./content/InformasiPengaduan";
import StatistikPengaduan from "./content/StatistikPengaduan";
import StatusTiket from "./content/StatusTiket";
import InformasiTiket from "./content/InformasiTiket";
import StatistikTiket from "./content/StatistikTiket";

export default function SidebarRight() {
    return (
        <div className="sidebar-right m-0 p-0">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="pengaduan" element={<Pengaduan/>}/>
                    <Route path="status-pengaduan" element={<StatusPengaduan/>}/>
                    <Route path="informasi-pengaduan" element={<InfoPengaduan/>}/>
                    <Route path="statistik-pengaduan" element={<StatistikPengaduan/>}/>
                    <Route path="status-tiket" element={<StatusTiket/>}/>
                    <Route path="informasi-tiket" element={<InformasiTiket/>}/>
                    <Route path="statistik-tiket" element={<StatistikTiket/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
        </div>
    )
}