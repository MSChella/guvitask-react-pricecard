// Card.jsx

import React from 'react';

const Card = ({ plan, price, features }) => {
    return (
        <div className="card">
            <h2>{plan}</h2>
            <p className="price">${price}/month</p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="button">BUTTON</button>
        </div>
    );
};

export default Card;
