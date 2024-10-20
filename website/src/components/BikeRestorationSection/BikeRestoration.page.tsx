/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
import React from 'react';
import { Text, Title } from '@mantine/core';
import ReusableCard from '../ReusableCard/ReusableCard';
import classes from './TrackPage.module.css';

interface CardData {
    title: string;
    description: string;
    imageSrc: string;
}

const BikeRestoration: React.FC = () => {

    const cardsData: CardData[] = [
        {
            title: 'Dublin High School vs Dougherty Valley High School',
            description:
                'I earned first place in the varsity 300 meter hurdles race.',
            imageSrc: '/track_pics/dhsvsdvhs.jpg',
        },
        {
            title: 'North Coast Section Meet of Champions',
            description:
                'I competed in the varsity 4x400 meter race against other North Coast section high schools',
            imageSrc: '/track_pics/ncs.jpg',
        },
        {
            title: 'North Coast Section Meet of Champions',
            description:
                'I competed in the varsity 4x400 meter race against other North Coast section high schools',
            imageSrc: '/track_pics/random.JPG',
        },
    ];

    return (
        <div>
            {cardsData.map((card, index) => (
                <ReusableCard key={index} {...card} />
            ))}
        </div>
    );
};

export default BikeRestoration;