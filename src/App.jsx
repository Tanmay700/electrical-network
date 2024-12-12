// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PointsProvider } from './pages/PointsContext';
import HomePage from './pages/HomePage';
import QuestionListPage from './pages/QuestionListPage';
import QuestionPage from './pages/QuestionPage';
import LoginPage from './pages/LoginPage'; // Import LoginPage

const App = () => {
    return (
        <PointsProvider>
            <Router>
                <Routes>
                    {/* Redirect root path to /login */}
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<LoginPage />} /> {/* LoginPage route */}
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/questions" element={<QuestionListPage />} />
                    <Route path="/questions/:id" element={<QuestionPage />} />
                </Routes>
            </Router>
        </PointsProvider>
    );
};

export default App;
