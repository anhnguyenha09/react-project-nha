import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-root">
                <Header />
                <Body />
                <Footer />
            </div>
        </BrowserRouter>
    );
}