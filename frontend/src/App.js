import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import CreditCards from './components/CreditCards';
import CreditScore from './components/CreditScore';
import Rewards from './components/Rewards';
import UpiPayments from './components/UpiPayments';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <nav className="navbar">
                    <div className="nav-brand">
                        <Link to="/">CRED</Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/credit-cards">Credit Cards</Link>
                        <Link to="/credit-score">Credit Score</Link>
                        <Link to="/rewards">Rewards</Link>
                        <Link to="/upi">UPI Payments</Link>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/credit-cards" element={<CreditCards />} />
                    <Route path="/credit-score" element={<CreditScore />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/upi" element={<UpiPayments />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;