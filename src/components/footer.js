// ===== src/components/Footer.js =====
import React from 'react';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <p>© {new Date().getFullYear()} My React Site. All rights reserved.</p>
            </div>
        </footer>
    );
}