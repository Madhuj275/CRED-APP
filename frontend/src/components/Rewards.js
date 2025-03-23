import React, { useState } from 'react';
import './Rewards.css';

const Rewards = () => {
    const [points, setPoints] = useState(1500);
    const [rewards] = useState([
        {
            id: 1,
            title: 'Amazon Gift Card',
            points: 1000,
            description: '₹1000 Amazon Gift Card',
            image: '🎁'
        },
        {
            id: 2,
            title: 'Movie Tickets',
            points: 500,
            description: 'Two movie tickets at PVR Cinemas',
            image: '🎬'
        },
        {
            id: 3,
            title: 'Food Delivery',
            points: 300,
            description: '₹300 off on Swiggy',
            image: '🍔'
        },
        {
            id: 4,
            title: 'Flight Discount',
            points: 2000,
            description: '₹2000 off on domestic flights',
            image: '✈️'
        }
    ]);

    const handleRedeemReward = (rewardPoints) => {
        if (points >= rewardPoints) {
            setPoints(points - rewardPoints);
            alert('Reward redeemed successfully!');
        } else {
            alert('Not enough points!');
        }
    };

    return (
        <div className="rewards-page">
            <div className="rewards-header">
                <h1>CRED Rewards</h1>
                <div className="points-display">
                    <span>Available Points</span>
                    <h2>{points}</h2>
                </div>
            </div>

            <div className="rewards-grid">
                {rewards.map(reward => (
                    <div key={reward.id} className="reward-card">
                        <div className="reward-icon">{reward.image}</div>
                        <h3>{reward.title}</h3>
                        <p>{reward.description}</p>
                        <div className="reward-footer">
                            <span className="points-required">{reward.points} points</span>
                            <button
                                className={`redeem-btn ${points < reward.points ? 'disabled' : ''}`}
                                onClick={() => handleRedeemReward(reward.points)}
                                disabled={points < reward.points}
                            >
                                Redeem
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="how-it-works">
                <h2>How to Earn Points</h2>
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-icon">💳</div>
                        <h4>Pay Credit Card Bills</h4>
                        <p>Earn 1% of bill amount as points</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">📱</div>
                        <h4>Use CRED UPI</h4>
                        <p>Get 2 points per transaction</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">🎯</div>
                        <h4>Complete Challenges</h4>
                        <p>Earn bonus points through challenges</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">👥</div>
                        <h4>Refer Friends</h4>
                        <p>Get 100 points per referral</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rewards; 