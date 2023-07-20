import { Link } from "react-router-dom";
import Form from "./Form";
import Logo from "./Logo";

import '../styles/components/header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/">
                    <Logo />
                </Link>
                <Form />
            </nav>
        </header>
    )
};

export default Header;