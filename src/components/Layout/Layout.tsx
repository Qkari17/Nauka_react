import { Outlet } from "react-router-dom"
import { Menu } from "./Menu"

export const Layout = () => {
    return(
        <div>
            <Menu></Menu>
            <Outlet></Outlet>
        </div>
    )
}