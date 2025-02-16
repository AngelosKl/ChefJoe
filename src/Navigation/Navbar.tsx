import { Link } from "react-router-dom";
import Home from "../WelcomeScreen/Home";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">{<Home />}</Link>

        </nav>
    );
};

export default Navbar;