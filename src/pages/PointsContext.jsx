import React, { createContext, useContext, useState } from 'react';

// Create the Points Context
const PointsContext = createContext();

// Provide the Points Context to the App
export const PointsProvider = ({ children }) => {
    const [points, setPoints] = useState(100); // Initial points

    const addPoints = (value) => setPoints((prev) => prev + value);
    const deductPoints = (value) => setPoints((prev) => Math.max(0, prev - value));

    return (
        <PointsContext.Provider value={{ points, addPoints, deductPoints }}>
            {children}
        </PointsContext.Provider>
    );
};

// Custom Hook to Use Points Context
export const usePoints = () => useContext(PointsContext);
