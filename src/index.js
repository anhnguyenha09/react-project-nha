import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <BrowserRouter>
            <Body />
        </BrowserRouter>

        <Footer />
    </>
);

reportWebVitals();
