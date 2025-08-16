import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './components/Body';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header></Header>
        <BrowserRouter>
            <Body></Body>
        </BrowserRouter>
        <Footer></Footer>
    </React.StrictMode>
);
reportWebVitals();