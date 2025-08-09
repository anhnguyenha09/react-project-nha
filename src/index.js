import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Body from './body';
import Header from './header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Body></Body>
    <Header></Header>
    {/* <h1>
      Xin chao
    </h1>
    <div>
      <label> Số thứ 1 </label>
      <input placeholder='Nhập số thứ 1'></input>
    </div>
    <div>
      <label> Số thứ 2 </label>
      <input placeholder='Nhập số thứ 2'></input>
    </div>
    <span>Kết quả: ?</span> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
