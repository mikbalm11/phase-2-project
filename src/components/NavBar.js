import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink
                to="/home"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/movies"
                className="nav-link"
            >
                Movies
            </NavLink>
            <NavLink
                to="/add"
                className="nav-link"
            >
                Add
            </NavLink>
            <NavLink
                to="/about"
                className="nav-link"
            >
                About
            </NavLink>

        </nav>
    );
};

export default NavBar;
