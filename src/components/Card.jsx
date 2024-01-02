// Card.jsx

import React from 'react';

const Card = ({ plan, price, features }) => {
    return (
        <div className="card">
            <p >{plan}</p>
            <h1 className="price ">${price}/month</h1>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="btn btn btn-primary">BUTTON</button>
        </div>
    );
};

export default Card;
