import { NavLink } from "react-router-dom";
import "./styles.css"

export function Menu() {
    return (
        <ul className="nav-header">
            <li >
                <NavLink className="nav-item" exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="nav-item" exact to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink className="nav-item" exact to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink  className="nav-item" exact to="/products/123">Products</NavLink>
            </li>
        </ul>
    )
}