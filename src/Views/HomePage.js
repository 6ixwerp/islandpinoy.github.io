// src/Views/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import Footer from './Footer.js';
import TopFold from './TopFold.js';
const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div className="cafe-homepage">
            <TopFold />
            <Footer />
        </div>
    );
};

export default HomePage;