// CardList.jsx

import React from 'react';
import Card from './Card';

const CardList = () => {
    const plans = [
        {
            plan: 'FREE',
            price: 0,
            features: ['Single User', '50GB Storage', 'Unlimited Public Projects', 'Community Access',

                'Unlimited Private Project', 'Dedicated Phone Support', 'Free SubDomain', 'Monthly Status Report'],
            isFeautured: false
        },
        {
            plan: 'PLUS',
            price: 9,
            features: ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access',
                'Unlimited Private Project', 'Dedicated Phone Support', 'Free SubDomain', 'Monthly Status Report'],
            isFeautured: false
        },
        {
            plan: 'PRO',
            price: 49,
            features: ['Unlimited Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access',
                'Unlimited Private Project', 'Dedicated Phone Support', 'Free SubDomain', 'Monthly Status Report'],
            isFeautured: true
        },
    ];

    return (
        <div className="card-list">
            {plans.map((plan, index) => (
                <Card key={index} {...plan} />
            ))}
        </div>
    );
};

export default CardList;
