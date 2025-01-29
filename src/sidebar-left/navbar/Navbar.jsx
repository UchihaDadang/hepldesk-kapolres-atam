import NavbarBottom from "./NavbarBottom";
import NavbarItems from "./NavbarItems";
import NavbarLogo from "./NavbarLogo";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavbarLogo/>
            <NavbarItems/>
            <NavbarBottom/>
        </nav>
    )
}