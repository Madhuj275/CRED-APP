# CRED-APP

A modern web application inspired by CRED, built with React.js and Node.js. This application helps users manage their credit cards, track credit scores, and earn rewards.

## Features

### Credit Card Management
- Add and manage multiple credit cards
- Real-time card validation
- Secure card information storage
- Beautiful card UI with dynamic backgrounds
- Card type detection (Visa, Mastercard)

### Credit Score Tracking
- View and monitor credit scores
- Historical score tracking
- Score improvement suggestions
- Visual score representation

### Rewards System
- Points accumulation
- Rewards redemption
- Transaction history
- Reward categories

### UPI Payments
- Link UPI IDs
- Quick payment processing
- Transaction history
- Payment status tracking

### User Dashboard
- Personalized dashboard
- Quick access to all features
- Recent activity overview
- Account statistics

## Tech Stack

### Frontend
- React.js
- Redux for state management
- React Router for navigation
- CSS3 with modern styling
- Responsive design

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- RESTful API architecture
- JWT authentication

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cred-app.git
cd cred-app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create environment files:

For backend (`backend/.env`):
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

For frontend (`frontend/.env`):
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
cred-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   └── package.json
└── README.md
```

![image](https://github.com/user-attachments/assets/1dd1c0e1-1f54-40a3-80e3-4b29d8c2b1f2)
![image](https://github.com/user-attachments/assets/2104babe-66b0-4620-b38e-65d094034644)
![image](https://github.com/user-attachments/assets/37b2e0b1-a600-4c35-9fcf-cadc77170937)
![image](https://github.com/user-attachments/assets/dcc3fdc1-1650-4a3d-af64-764a6dec0efd)
![image](https://github.com/user-attachments/assets/f389558d-e751-4a1b-b7d0-bd3e772f0100)




