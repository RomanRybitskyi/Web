import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal component', () => {
    it('renders correctly when isOpen is true', () => {
        const onClose = jest.fn();
        const { getByText, getByPlaceholderText } = render(<Modal isOpen={true} onClose={onClose} />);

        expect(getByPlaceholderText("Ім'я")).toBeInTheDocument();
        expect(getByPlaceholderText('Телефон')).toBeInTheDocument();
        expect(getByPlaceholderText('Електронна пошта')).toBeInTheDocument();
        expect(getByText('Close')).toBeInTheDocument();
    });

    it('does not render when isOpen is false', () => {
        const onClose = jest.fn();
        const { container } = render(<Modal isOpen={false} onClose={onClose} />);

        expect(container.firstChild).toBeNull();
    });

    it('closes modal when close button is clicked', () => {
        const onClose = jest.fn();
        const { getByText } = render(<Modal isOpen={true} onClose={onClose} />);

        fireEvent.click(getByText('Close'));

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('closes modal when clicking outside modal', () => {
        const onClose = jest.fn();
        const { getByText, container } = render(<Modal isOpen={true} onClose={onClose} />);

        fireEvent.mouseDown(container); // Simulate clicking outside modal

        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
