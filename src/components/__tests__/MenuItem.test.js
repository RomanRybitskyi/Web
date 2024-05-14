import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuItem from '../MenuItem';

const mockItems = [
    { id: 1, title: 'Dish 1', img: 'dish1.jpg', price: 10, ingredients: 'Ingredients for Dish 1' },
    { id: 2, title: 'Dish 2', img: 'dish2.jpg', price: 15, ingredients: 'Ingredients for Dish 2' },
];

describe('MenuItem component', () => {

    test('renders "Not Found" if item with provided ID does not exist', () => {
        render(
            <MemoryRouter initialEntries={['/menu/100']}>
                <MenuItem items={mockItems} />
            </MemoryRouter>
        );

        expect(screen.getByText('Not Found')).toBeInTheDocument();
    });
});
