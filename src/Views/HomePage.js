// src/Views/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import TopFold from './TopFold';

const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div className="cafe-homepage">
            <TopFold />
        </div>
    );
};

export default HomePage;