// ===== src/components/Header.js =====
import React from 'react';

export default function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <h1 className="logo">My React Site</h1>
                <nav className="nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}
