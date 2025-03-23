import React, { useState } from 'react';
import './CreditCards.css';

const CreditCards = () => {
    const [cards, setCards] = useState([]);
    const [showAddCard, setShowAddCard] = useState(false);
    const [newCard, setNewCard] = useState({
        number: '',
        name: '',
        expiry: '',
        bank: '',
        type: 'VISA' // Default card type
    });

    const formatCardNumber = (number) => {
        return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    };

    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 16) value = value.slice(0, 16);
        value = formatCardNumber(value);
        setNewCard({...newCard, number: value});
    };

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4) value = value.slice(0, 4);
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        setNewCard({...newCard, expiry: value});
    };

    const handleAddCard = (e) => {
        e.preventDefault();
        const cardType = newCard.number.startsWith('4') ? 'VISA' : 
                        newCard.number.startsWith('5') ? 'MASTERCARD' : 
                        'VISA';
        setCards([...cards, { ...newCard, id: Date.now(), type: cardType }]);
        setNewCard({ number: '', name: '', expiry: '', bank: '', type: 'VISA' });
        setShowAddCard(false);
    };

    const getCardBackground = (type) => {
        return type === 'MASTERCARD' 
            ? 'linear-gradient(135deg, #FF8B37 0%, #E63950 100%)'
            : 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)';
    };

    return (
        <div className="credit-cards-page">
            <div className="page-header">
                <h1>Credit Cards</h1>
                <p className="header-subtitle">Manage your cards and pay bills</p>
                <button 
                    className="add-card-btn"
                    onClick={() => setShowAddCard(true)}
                >
                    Add New Card
                </button>
            </div>

            {showAddCard && (
                <div className="add-card-modal">
                    <div className="modal-content">
                        <h2>Add New Credit Card</h2>
                        <form onSubmit={handleAddCard}>
                            <div className="form-group">
                                <label>Card Number</label>
                                <input
                                    type="text"
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    value={newCard.number}
                                    onChange={handleCardNumberChange}
                                    maxLength="19"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Cardholder Name</label>
                                <input
                                    type="text"
                                    placeholder="Name on card"
                                    value={newCard.name}
                                    onChange={(e) => setNewCard({...newCard, name: e.target.value.toUpperCase()})}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Expiry Date</label>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        value={newCard.expiry}
                                        onChange={handleExpiryChange}
                                        maxLength="5"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Bank Name</label>
                                    <input
                                        type="text"
                                        placeholder="Bank name"
                                        value={newCard.bank}
                                        onChange={(e) => setNewCard({...newCard, bank: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-actions">
                                <button type="button" onClick={() => setShowAddCard(false)}>Cancel</button>
                                <button type="submit">Add Card</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="cards-grid">
                {cards.length === 0 ? (
                    <div className="no-cards">
                        <p>No credit cards added yet</p>
                        <button onClick={() => setShowAddCard(true)}>Add your first card</button>
                    </div>
                ) : (
                    cards.map(card => (
                        <div 
                            key={card.id} 
                            className="card-item"
                            style={{
                                background: getCardBackground(card.type)
                            }}
                        >
                            <div className="card-header">
                                <h3>{card.bank}</h3>
                                <span className="card-type">{card.type}</span>
                            </div>
                            <div className="card-chip">
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                            </div>
                            <div className="card-number">
                                {formatCardNumber(card.number)}
                            </div>
                            <div className="card-footer">
                                <div className="card-name">
                                    <span>Card Holder</span>
                                    <strong>{card.name}</strong>
                                </div>
                                <div className="card-expiry">
                                    <span>Expires</span>
                                    <strong>{card.expiry}</strong>
                                </div>
                            </div>
                            <button className="pay-bill-btn">Pay Bill</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CreditCards; 