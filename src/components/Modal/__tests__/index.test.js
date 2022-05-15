/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Modal from "..";

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

afterEach(cleanup)

describe('modal component', () => {
    it('renders', () => {
        <Modal 
            currentPhoto={currentPhoto}
            toggleModal={mockToggleModal}
        />
    })

    it('matches snapshot', () => {
        const { asFragment } = render(
            <Modal 
                currentPhoto={currentPhoto}
                toggleModal={mockToggleModal}
            />);

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('click event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
        />);
        fireEvent.click(getByText('Close this modal'));
        
        expect(mockToggleModal).toHaveBeenCalledTimes(1)
    })
})