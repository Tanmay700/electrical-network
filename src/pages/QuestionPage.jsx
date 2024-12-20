import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePoints } from './PointsContext';
import { questionsData } from './questions';
import './QuestionPage.css';

const QuestionPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { points, addPoints, deductPoints } = usePoints();
    const [solution, setSolution] = useState('');

    // Convert id to a number if necessary
    const question = questionsData[parseInt(id)];

    if (!question) {
        return <p>Question not found. Please check the question ID.</p>;
    }

    const questionImages = {
        '1-1': './question/1',
        '1-2': 'https://res.cloudinary.com/demo/image/upload/v1612345678/thevenin_complex.jpg',
        '2-1': 'https://res.cloudinary.com/demo/image/upload/v1612345678/node_voltage_resistive.jpg',
        '2-2': 'https://res.cloudinary.com/demo/image/upload/v1612345678/node_voltage_rlc.jpg',
        '3-1': 'https://res.cloudinary.com/demo/image/upload/v1612345678/power_dc.jpg',
        '3-2': 'https://res.cloudinary.com/demo/image/upload/v1612345678/power_ac.jpg',
    };

    const handleSubmit = () => {
        if (solution.trim() === question.answer) {
            alert('Correct Answer! You earned 4 points.');
            addPoints(4);
        } else {
            alert('Wrong Answer! 1 points deducted.');
            deductPoints(1);
        }
        setSolution('');
    };

    const goBackToList = () => {
        navigate('/questions');
    };

    return (
        <div className="question-page-container">
            <button className="question-page-back-button" onClick={goBackToList}>
                Back to Questions
            </button>

            <div className="question-content">
                <h1 className="question-title">{question.title}</h1>
                <p className="question-description">{question.description}</p>
                
                <p className="points-display">Your Points: {points}</p>
            </div>
            {question.image ? (
                <img
                    src={question.image}
                    alt={`Question ${id}`}
                    className="question-image"
                    
                />

            ) : (
                <p className="image-placeholder">Image not available</p>
            )}

            <textarea
                className="question-page-textarea"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                placeholder="Enter your solution here..."
            />
            <div className="question-page-submit-container">
                <button className="question-page-submit-button" onClick={handleSubmit}>
                    Submit Solution
                </button>
            </div>
        </div>
    );
};

export default QuestionPage;
