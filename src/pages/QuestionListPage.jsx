import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './QuestionListPage.css'; // Import the styles
import { usePoints } from './PointsContext';

// Questions with related sub-questions
const questions = [
    {
        id: 1,
        title: 'Calculate the Thevenin Equivalent',
        subQuestions: [
            { id: '1-1', title: 'Thevenin Equivalent for a Simple Circuit' },
            { id: '1-2', title: 'Thevenin Equivalent for a Complex Circuit' }
        ]
    },
    {
        id: 2,
        title: 'Find the Node Voltage of the Circuit',
        subQuestions: [
            { id: '2-1', title: 'Node Voltage Method for Resistive Circuit' },
            { id: '2-2', title: 'Node Voltage Method for RLC Circuit' }
        ]
    },
    {
        id: 3,
        title: 'Determine the Power Delivered to Load',
        subQuestions: [
            { id: '3-1', title: 'Power Delivered in DC Circuit' },
            { id: '3-2', title: 'Power Delivered in AC Circuit' }
        ]
    }
];

const QuestionListPage = () => {
    const { points, addPoints, deductPoints } = usePoints();
    const navigate = useNavigate();
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    // Function to navigate back to the home page
    const goBack = () => {
        navigate('/');
    };

    // Handle click on a main question to show sub-questions
    const handleQuestionClick = (id) => {
        setSelectedQuestion(selectedQuestion === id ? null : id); // Toggle sub-questions
    };

    return (
        <div className="question-list-container">
            <h1 className="question-list-title">Questions</h1>

            {/* Display list of questions */}
            <ul className="question-list">
                {questions.map((q) => (
                    <li key={q.id} className="question-list-item">
                        <div onClick={() => handleQuestionClick(q.id)} className="question-title">
                            <Link to="#" className="question-link">
                                {q.title}
                            </Link>
                        </div>

                        {/* Show sub-questions when a main question is clicked */}
                        {selectedQuestion === q.id && (
                            <ul className="sub-question-list">
                                {q.subQuestions.map((subQ) => (
                                    <li key={subQ.id} className="sub-question-item">
                                        {/* Correctly link to each sub-question */}
                                        <Link to={`/questions/${subQ.id}`}>{subQ.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Back button */}
            <button className="back-button" onClick={goBack}>
                <i className="fas fa-home"></i> {/* Home Icon */}
               
            </button>
             <p className="points-display">Your Points: {points}</p>
        </div>
    );
};

export default QuestionListPage;
