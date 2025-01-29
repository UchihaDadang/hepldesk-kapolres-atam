import { NavLink } from 'react-router'

export default function NavbarItems() {
    const itemNavbar = [
        {
            title: 'Dashboard',
            items: [
                {to: '/', icon: "bi bi-house-fill", label: 'Beranda'},
                {to: '/dashboard', icon: 'bi bi-postcard-fill', label: 'Dashboard'},
            ],
        },
        {
            title: 'Pengaduan',
            items: [
                {to: '/pengaduan', icon: 'bi bi-question-square-fill', label: 'Pengaduan'},
                {to: '/status-pengaduan', icon: 'bi bi-question-square-fill', label: 'Status Pengaduan'},
                {to: '/informasi-pengaduan', icon: 'bi bi-database-fill-exclamation', label: 'Informasi Pengaduan'},
                {to: '/statistik-pengaduan', icon: 'bi bi-bar-chart-fill', label: 'Statistik Pengaduan' },
            ],
        },
        {
            title: 'Tiketing',
            items: [
                {to: '/status-tiket', icon: 'bi bi-ticket-fill', label: 'Status Tiket'},
                {to: '/informasi-tiket', icon: 'bi bi-stickies-fill', label: 'Informasi Tiket'},
                {to: '/statistik-tiket', icon: 'bi bi-file-earmark-bar-graph-fill', label: 'Statistik Tiket'},
            ],
        },
    ]


    return (
        <>
            {itemNavbar.map((list, index) => (
                <div className="navbar-list-items p-0 m-0" key={index}>
                    <p className="kategori m-0">{list.title}</p>
                    <ul className='navbar-items p-0 m-0'>
                        {list.items.map((item, i) => (
                            <li className='list' key={i}>
                                <NavLink  className={({ isActive }) => isActive? 'list-item active' : 'list-item'}  to={item.to}><i className={item.icon}></i>{item.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}