import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>

            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className="nav-link"
            >
                About
            </NavLink>
            <NavLink
                to="/add"
                className="nav-link"
            >
                Add
            </NavLink>
            <NavLink
                to="/error"
                className="nav-link"
            >
                Error
            </NavLink>
        </nav>
    );
};

export default NavBar;
