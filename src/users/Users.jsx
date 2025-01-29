import { BrowserRouter } from "react-router";
import SidebarLeft from "../sidebar-left/sidebarLeft";
import SidebarRight from "../sidebar-right/SidebarRight";

export default function Users() {
    return (
        <div className="container-xxl m-0 p-0 d-flex">
            <BrowserRouter>
                <SidebarLeft/>
                <SidebarRight/>
            </BrowserRouter>
        </div>
    )
}