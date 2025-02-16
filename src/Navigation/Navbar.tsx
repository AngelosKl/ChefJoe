import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/work-experience">Work Experience</Link></li>
                <li><Link to="/cuisines-techniques">Cuisines & Techniques</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;