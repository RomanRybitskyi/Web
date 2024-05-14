import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
    test('renders footer logo', () => {
        render(<Footer />);
        const logoElement = screen.getByText('FineDine');
        expect(logoElement).toBeInTheDocument();
    });

    test('renders footer menu links', () => {
        render(<Footer />);
        const menuLinks = screen.getAllByRole('link', { name: /Menu|Reserve|About Us|Attitude/i });
        expect(menuLinks).toHaveLength(4);
    });



    test('renders privacy policy link', () => {
        render(<Footer />);
        const privacyPolicyLink = screen.getByRole('link', { name: /Privacy Policy/i });
        expect(privacyPolicyLink).toBeInTheDocument();
    });

    test('renders copyright information', () => {
        render(<Footer />);
        const copyrightText = screen.getByText(/copyright/i);
        expect(copyrightText).toBeInTheDocument();
    });
});
