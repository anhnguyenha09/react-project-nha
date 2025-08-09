// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import Body from './body';
// import Header from './header';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Body></Body>
//     <Header></Header>
//     {/* <h1>
//       Xin chao
//     </h1>
//     <div>
//       <label> Số thứ 1 </label>
//       <input placeholder='Nhập số thứ 1'></input>
//     </div>
//     <div>
//       <label> Số thứ 2 </label>
//       <input placeholder='Nhập số thứ 2'></input>
//     </div>
//     <span>Kết quả: ?</span> */}

//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Project: Simple React layout with Header, Body, Footer (plain CSS)
// Instructions:
// 1. Create a new React app (or use existing): npx create-react-app my-app
// 2. Replace / add the files below into the project's src/ folder.
// 3. Start the app: npm start

// ===== src/index.js =====
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// ===== src/App.js =====
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-root">
      <Header></Header>
      <Body />
      <Footer />
    </div>
  );
}

// // ===== src/components/Header.js =====
// import React from 'react';

// export default function Header() {
//   return (
//     <header className="site-header">
//       <div className="container">
//         <h1 className="logo">My React Site</h1>
//         <nav className="nav">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#contact">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// ===== src/components/Body.js =====
import React from 'react';

export default function Body() {
  return (
    <main className="site-body">
      <div className="container">
        <section className="hero">
          <h2>Welcome to the simple layout</h2>
          <p>This is a lightweight example using plain CSS and React components.</p>
        </section>

        <section className="content">
          <h3>Content area</h3>
          <p>
            Add your components, cards, lists, or whatever you need here. This
            area grows with content and will remain between the header and footer.
          </p>
        </section>
      </div>
    </main>
  );
}

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

// // ===== src/index.css =====
// /* Basic reset and layout (plain CSS) */
// :root{
//   --primary: #2b6cb0;
//   --muted: #f7fafc;
//   --text: #2d3748;
// }
// * { box- sizing: border - box; }
// html, body, #root{ height: 100 %; margin: 0; padding: 0; font - family: -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: var(--text); }

// .container{ max - width: 1000px; margin: 0 auto; padding: 0 16px; }

// .app - root{ display: flex; flex - direction: column; min - height: 100vh; }

// /* Header */
// .site - header{ background: var(--primary); color: white; }
// .site - header.container{ display: flex; align - items: center; justify - content: space - between; padding: 18px 0; }
// .logo{ margin: 0; font - size: 1.25rem; }
// .nav a{ color: rgba(255, 255, 255, 0.9); text - decoration: none; margin - left: 16px; font - weight: 600; }
// .nav a:hover{ text - decoration: underline; }

// /* Body */
// .site - body{ flex: 1; background: var(--muted); padding: 32px 0; }
// .hero{ background: white; padding: 28px; border - radius: 8px; box - shadow: 0 2px 6px rgba(0, 0, 0, 0.06); margin - bottom: 18px; }
// .hero h2{ margin - top: 0; }
// .content{ background: white; padding: 20px; border - radius: 8px; box - shadow: 0 2px 6px rgba(0, 0, 0, 0.04); }

// /* Footer */
// .site - footer{ background:#1a202c; color: #cbd5e0; padding: 16px 0; }
// .site - footer.container{ text - align: center; }

// /* Responsive tweaks */
// @media(max - width: 600px) {
//   .nav a{ margin - left: 10px; font - size: 0.95rem; }
//   .container{ padding: 0 12px; }
// }

// /* End of files */

