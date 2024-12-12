// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS

const InputField = ({ label, type, value, onChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            required
            className="form-input"
        />
    </div>
);

const LoginPage = () => {
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        // Basic validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email.');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        }

        if (isRegister && password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        setIsLoading(true);
        try {
            // Simulate login/register success
            setTimeout(() => {
                setIsLoading(false);
                console.log(isRegister ? 'Registering...' : 'Logging in...');
                navigate('/home'); // Replace with your desired route
            }, 2000);
        } catch (err) {
            setErrorMessage('Something went wrong. Please try again.');
            setIsLoading(false);
        }
    };

    const toggleForm = () => setIsRegister((prev) => !prev);

    return (
        <div className="login-container">
            <h1 className="login-title">{isRegister ? 'Register' : 'Login'}</h1>
            {errorMessage && (
                <p className="error-message" aria-live="assertive">
                    {errorMessage}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {isRegister && (
                    <InputField
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                )}
                <button type="submit" className="login-button" disabled={isLoading}>
                    {isLoading ? 'Processing...' : isRegister ? 'Register' : 'Login'}
                </button>
            </form>
            <p>
                {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button className="toggle-button" onClick={toggleForm}>
                    {isRegister ? 'Login' : 'Register'}
                </button>
            </p>
        </div>
    );
};

export default LoginPage;
