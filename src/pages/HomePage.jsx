import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS
import { usePoints } from './PointsContext';

const questions = [
    { id: 1, title: 'Calculate the Thevenin Equivalent' },
    { id: 2, title: 'Find the Node Voltage of the Circuit' },
    { id: 3, title: 'Determine the Power Delivered to Load' },
];

const HomePage = () => {
    const navigate = useNavigate();
    const { points, addPoints, deductPoints } = usePoints();


    const [isDarkMode, setIsDarkMode] = useState(false);

    // Handler to navigate to the questions page
    const goToQuestions = () => {
        navigate('/questions');
    };

    // Handler to navigate to the results page
    const goToResult = () => {
        navigate('/result');
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    // Function to navigate back to the home page
   

    return (
        <div className={`home-container ${isDarkMode ? 'dark-mode' : ''}`}>
           

            <h1 className="home-title">Welcome to Electrical Networks Practice</h1>
            <p className="home-description">
                Solve questions, upload answers, and get instant feedback.
            </p>

            <div className="home-buttons-container">
                <button className="home-button" onClick={goToQuestions}>
                    Start Solving Questions
                </button>

                 <p className="points-display-1">Your Points: {points}</p>
            </div>

          

         

            {/* Dark Mode Toggle */}
            <button
                className={`dark-mode-toggle ${isDarkMode ? 'dark-mode' : ''}`}
                onClick={toggleDarkMode}
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
};

export default HomePage;
