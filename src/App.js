// ===== src/App.js =====
import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

export default function App() {
    return (
        <div className="app-root">
            <Header></Header>
            <Body />
            <Footer />
        </div>
        // <React></React>
    );
}