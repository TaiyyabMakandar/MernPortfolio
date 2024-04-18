import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>

            <header>
                <nav class="container">
                    <div class="logo">
                        Portfolio
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        {isLoggedIn ?
                            <li>
                                <NavLink to="/logout">Logout</NavLink>
                            </li>
                            :
                            <>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </header>
            {/* <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to="/">Taiyyab</NavLink>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        {isLoggedIn ?
                            <li>
                                <NavLink to="/logout">Logout</NavLink>
                            </li>
                            :
                            <>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </>
                        }

                    </ul>
                </div>
            </header> */}
        </>
    );
}