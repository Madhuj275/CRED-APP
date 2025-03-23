import React, { useState } from 'react';
import './CreditScore.css';

const CreditScore = () => {
    const [score, setScore] = useState(750);
    const [history, setHistory] = useState([
        { month: 'Jan', score: 745 },
        { month: 'Feb', score: 748 },
        { month: 'Mar', score: 750 }
    ]);

    return (
        <div className="credit-score-page">
            <div className="score-header">
                <h1>Your Credit Score</h1>
                <p>Updated as of {new Date().toLocaleDateString()}</p>
            </div>

            <div className="score-card">
                <div className="score-display">
                    <div className="score-circle">
                        <h2>{score}</h2>
                        <p>EXCELLENT</p>
                    </div>
                </div>
                <div className="score-details">
                    <div className="score-range">
                        <span>300</span>
                        <div className="range-bar">
                            <div 
                                className="range-fill" 
                                style={{ width: `${((score - 300) / (900 - 300)) * 100}%` }}
                            ></div>
                        </div>
                        <span>900</span>
                    </div>
                    <p className="score-info">
                        Your credit score is excellent! Keep maintaining your credit habits.
                    </p>
                </div>
            </div>

            <div className="score-history">
                <h3>Score History</h3>
                <div className="history-graph">
                    {history.map((item, index) => (
                        <div key={index} className="history-item">
                            <div 
                                className="history-bar"
                                style={{ height: `${(item.score - 700) * 0.5}px` }}
                            ></div>
                            <span>{item.month}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="score-factors">
                <h3>Factors Affecting Your Score</h3>
                <div className="factors-grid">
                    <div className="factor-card positive">
                        <h4>Payment History</h4>
                        <p>Excellent payment history with no missed payments</p>
                    </div>
                    <div className="factor-card positive">
                        <h4>Credit Utilization</h4>
                        <p>Low credit utilization ratio below 30%</p>
                    </div>
                    <div className="factor-card neutral">
                        <h4>Credit Age</h4>
                        <p>Moderate length of credit history</p>
                    </div>
                    <div className="factor-card positive">
                        <h4>Credit Mix</h4>
                        <p>Good mix of credit types</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditScore; 