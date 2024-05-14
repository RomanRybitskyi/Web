import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from '../Menu';

const mockItems = [
    {
        id: 1,
        title: 'Dish 1',
        img: 'dish1.jpg',
        desc: 'Description of Dish 1',
        price: 10,
    },
    {
        id: 2,
        title: 'Dish 2',
        img: 'dish2.jpg',
        desc: 'Description of Dish 2',
        price: 15,
    },
];

describe('Menu component', () => {
    test('renders menu items with correct information', () => {
        render(
            <MemoryRouter>
                <Menu items={mockItems} />
            </MemoryRouter>
        );

        const menuItems = screen.getAllByRole('link', { name: /dish/i });
        expect(menuItems).toHaveLength(mockItems.length);

        mockItems.forEach((menuItem, index) => {
            const { title, img, desc, price } = menuItem;
            const menuItemElement = menuItems[index];
            expect(menuItemElement).toHaveAttribute('href', `/menu/${menuItem.id}`);

            const imageElement = menuItemElement.querySelector('img');
            expect(imageElement).toHaveAttribute('src', img);
            expect(imageElement).toHaveAttribute('alt', title);

            expect(menuItemElement).toHaveTextContent(title);
            expect(menuItemElement).toHaveTextContent(`$${price}`);
            expect(menuItemElement).toHaveTextContent(desc);
        });
    });
});
