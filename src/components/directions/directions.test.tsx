import React from 'react';
import { render  } from '@testing-library/react'
import Chance from 'chance';
import { Directions } from './directions';

describe( 'Directions', () => {
    const chance = new Chance();
    const directions = [
        { text: chance.word() },
        { text: chance.word(), type: 'optional' },
        [
            { text: chance.word() },
            { text: chance.word() }
        ]
    ];

    it('should render', () => {
        const { findAllByText } = render(<Directions steps={directions} />);

        directions.forEach((direction) => {
            if (Array.isArray(direction)) {
                direction.forEach((subDirection) => {
                    expect(findAllByText(subDirection.text)).toBeInTheDocument();
                });
            } else {
                expect(findAllByText(direction.text)).toBeInTheDocument();
            }
        })
    });
});
