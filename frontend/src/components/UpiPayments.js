import React, { useState } from 'react';
import './UpiPayments.css';

const UpiPayments = () => {
    const [activeTab, setActiveTab] = useState('scan');
    const [paymentDetails, setPaymentDetails] = useState({
        upiId: '',
        amount: '',
        note: ''
    });
    const [recentTransactions] = useState([
        {
            id: 1,
            name: 'Swiggy',
            amount: '₹549',
            type: 'debit',
            date: '2024-03-23'
        },
        {
            id: 2,
            name: 'Amazon',
            amount: '₹1299',
            type: 'debit',
            date: '2024-03-22'
        },
        {
            id: 3,
            name: 'John Doe',
            amount: '₹2000',
            type: 'credit',
            date: '2024-03-21'
        }
    ]);

    const handlePayment = (e) => {
        e.preventDefault();
        alert('Payment initiated! This is a demo.');
        setPaymentDetails({ upiId: '', amount: '', note: '' });
    };

    return (
        <div className="upi-page">
            <div className="upi-header">
                <h1>UPI Payments</h1>
                <div className="tabs">
                    <button
                        className={`tab ${activeTab === 'scan' ? 'active' : ''}`}
                        onClick={() => setActiveTab('scan')}
                    >
                        Scan & Pay
                    </button>
                    <button
                        className={`tab ${activeTab === 'pay' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pay')}
                    >
                        Pay to UPI ID
                    </button>
                </div>
            </div>

            <div className="upi-content">
                {activeTab === 'scan' ? (
                    <div className="scan-section">
                        <div className="qr-scanner">
                            <div className="scanner-overlay">
                                <span>Point your camera at a QR code</span>
                            </div>
                        </div>
                        <button className="scan-btn">Open Camera</button>
                    </div>
                ) : (
                    <div className="pay-section">
                        <form onSubmit={handlePayment}>
                            <div className="form-group">
                                <label>UPI ID</label>
                                <input
                                    type="text"
                                    placeholder="Enter UPI ID"
                                    value={paymentDetails.upiId}
                                    onChange={(e) => setPaymentDetails({
                                        ...paymentDetails,
                                        upiId: e.target.value
                                    })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Amount</label>
                                <input
                                    type="number"
                                    placeholder="Enter amount"
                                    value={paymentDetails.amount}
                                    onChange={(e) => setPaymentDetails({
                                        ...paymentDetails,
                                        amount: e.target.value
                                    })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Note (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="Add a note"
                                    value={paymentDetails.note}
                                    onChange={(e) => setPaymentDetails({
                                        ...paymentDetails,
                                        note: e.target.value
                                    })}
                                />
                            </div>
                            <button type="submit" className="pay-btn">Pay Now</button>
                        </form>
                    </div>
                )}
            </div>

            <div className="recent-transactions">
                <h2>Recent Transactions</h2>
                <div className="transactions-list">
                    {recentTransactions.map(transaction => (
                        <div key={transaction.id} className="transaction-item">
                            <div className="transaction-info">
                                <h3>{transaction.name}</h3>
                                <span className="date">{transaction.date}</span>
                            </div>
                            <span className={`amount ${transaction.type}`}>
                                {transaction.type === 'credit' ? '+' : '-'} {transaction.amount}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpiPayments; 