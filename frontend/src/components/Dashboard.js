import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <section className="hero-section">
                <h1>rewards for paying credit card bills.</h1>
                <p>join 9M+ members who win rewards and cashbacks everyday</p>
                <button onClick={() => navigate('/credit-cards')} className="cta-button">
                    Explore CRED
                </button>
            </section>

            <section className="features-section">
                <div className="feature-card" onClick={() => navigate('/credit-cards')}>
                    <div className="feature-icon">💳</div>
                    <h3>Credit Card Bill Payment</h3>
                    <p>Pay your credit card bills and earn exclusive rewards</p>
                </div>

                <div className="feature-card" onClick={() => navigate('/credit-score')}>
                    <div className="feature-icon">📈</div>
                    <h3>Free Credit Score</h3>
                    <p>Check and track your credit score for free</p>
                </div>

                <div className="feature-card" onClick={() => navigate('/rewards')}>
                    <div className="feature-icon">🎁</div>
                    <h3>CRED Rewards</h3>
                    <p>Unlock exclusive rewards and cashbacks</p>
                </div>

                <div className="feature-card" onClick={() => navigate('/upi')}>
                    <div className="feature-icon">📱</div>
                    <h3>UPI Payments</h3>
                    <p>Make secure UPI payments directly from your bank</p>
                </div>
            </section>

            <section className="benefits-section">
                <h2>why become a CRED member?</h2>
                <div className="benefits-grid">
                    <div className="benefit-item">
                        <h4>rewards</h4>
                        <p>earn rewards on every bill payment</p>
                    </div>
                    <div className="benefit-item">
                        <h4>cashbacks</h4>
                        <p>unlock cashbacks on premium brands</p>
                    </div>
                    <div className="benefit-item">
                        <h4>credit score</h4>
                        <p>track and improve your credit score</p>
                    </div>
                    <div className="benefit-item">
                        <h4>exclusive access</h4>
                        <p>get access to exclusive member events</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard; 