import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from '../SignUp';

describe('SignUp component', () => {
    test('renders registration form with all required input fields', () => {
        render(<SignUp />);

        expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Create password')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
        expect(screen.getByText('I accept all terms & condition')).toBeInTheDocument();
        expect(screen.getByText('Register Now')).toBeInTheDocument();
        expect(screen.getByText('Already have an account?')).toBeInTheDocument();
    });


    test('renders register button', () => {
        render(<SignUp />);

        expect(screen.getByRole('button', { name: 'Register Now' })).toBeInTheDocument();
    });

    test('renders checkbox for accepting terms and conditions', () => {
        render(<SignUp />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
});
