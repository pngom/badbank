import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tooltip/dist/react-tooltip.css'
import './index.css'

import App from './App';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Deposit from './pages/Deposit';
import Withdrawal from './pages/Withdrawal';
import AllData from './pages/AllData';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>} />
          <Route path="createaccount" element={<CreateAccount/>} />
          <Route path="deposit" element={<Deposit/>} />
          <Route path="withdrawal" element={<Withdrawal/>} />
          <Route path="alldata" element={<AllData/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
      document.getElementById('root')
);


