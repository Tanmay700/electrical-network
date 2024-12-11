import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PointsProvider } from './pages/PointsContext';
import HomePage from './pages/HomePage';
import QuestionListPage from './pages/QuestionListPage';
import QuestionPage from './pages/QuestionPage';

const App = () => {
    return (
        <PointsProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/questions" element={<QuestionListPage />} />
                    <Route path="/questions/:id" element={<QuestionPage />} />
                </Routes>
            </Router>
        </PointsProvider>
    );
};

export default App;
