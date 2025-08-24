import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminOverview from './pages/AdminOverview';
import AdminCategories from './pages/AdminCategories';
import VendorLogin from './pages/VendorLogin';
import VendorRedeem from './pages/VendorRedeem';
import VendorLedger from './pages/VendorLedger';
import './index.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>NutriTap Frontend</h1>} />
      <Route path="/admin" element={<AdminOverview />} />
      <Route path="/admin/categories" element={<AdminCategories />} />
      <Route path="/vendor/login" element={<VendorLogin />} />
      <Route path="/vendor/redeem" element={<VendorRedeem />} />
      <Route path="/vendor/ledger" element={<VendorLedger />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
