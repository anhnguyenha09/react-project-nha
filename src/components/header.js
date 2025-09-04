import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <h1 className="logo">Quản lý sinh viên</h1>

                {/* Navigation */}
                <nav>
                    <ul className="nav-menu">
                        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Đăng ký</Link></li>
                        <li><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Đăng nhập</Link></li>
                        <li><Link to="/studentlist" style={{ color: 'white', textDecoration: 'none' }}>Danh sách SV</Link></li>
                        <li><Link to="/info" style={{ color: 'white', textDecoration: 'none' }}>Thông tin</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;