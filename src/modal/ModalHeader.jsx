export default function ModalHeader({ children }) {
    return(
        <div className="modal-header p-3 m-0">
            { children }
        </div>
    )
}

const HeaderDashboard = () => {
    return(
        <>
            <div className="header-left">
                <h1>Dashboard</h1>
            </div>
            <div className="header-right">
                <div className="profile"></div>
            </div>
        </>

    )
}

const HeaderHome = () => {
    return(
        <>
            <div className="header-left">
                <h1>Beranda</h1>
            </div>
            <div className="header-right">
                <div className="profile"></div>
            </div>
        </>

    )
}

const HeaderInformasiPengaduan = () => {
    return(
        <>
            <div className="header-left">
                <h1>Informasi Pengaduan</h1>
            </div>
            <div className="header-right">
                <div className="profile"></div>
            </div>
        </>

    )
}

const HeaderInformasiTiket = () => {
    return(
        <>
            <div className="header-left">
                <h1>Informasi Tiket</h1>
            </div>
            <div className="header-right">
                <div className="profile"></div>
            </div>
        </>

    )
}

const HeaderPengaduan = () => {
    return(
        <>
            <div className="header-left">
                <h1>Pengaduan</h1>
            </div>
            <div className="header-right">
                <div className="profile"></div>
            </div>
        </>

    )
}

const HeaderStatistikPengaduan = () => {
    return(
        <>
            <div className="header-left">
                <h1>Statistik Pengaduan</h1>
            </div>
            <div className="header-right">
                <div className="profile"></div>
            </div>
        </>

    )
}

const HeaderStatistikTiket = () => {
    return(
        <>
            <div className="header-left">
                <h1>Statistik Tiket</h1>
            </div>
            <div className="header-right">
                <div className="profile"></div>
            </div>
        </>

    )
}

const HeaderStatusPengaduan = () => {
    return(
        <>
            <div className="header-left">
                <h1>Status Pengaduan</h1>
            </div>
            <div className="header-right">
                <div className="profile"></div>
            </div>
        </>

    )
}

const HeaderStatusTiket = () => {
    return(
        <>
            <div className="header-left">
                <h1>Status Tiket </h1>
            </div>
            <div className="header-right">
                <div className="profile"></div>
            </div>
        </>

    )
}

export 
    { 
        HeaderDashboard,
        HeaderHome,
        HeaderInformasiPengaduan,
        HeaderInformasiTiket,
        HeaderPengaduan,
        HeaderStatistikPengaduan,
        HeaderStatistikTiket,
        HeaderStatusPengaduan,
        HeaderStatusTiket
    };