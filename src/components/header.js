import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <h1 className="logo">Quan ly sinh vien</h1>

                {/* Navigation */}
                <nav>
                    <ul className="nav-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
