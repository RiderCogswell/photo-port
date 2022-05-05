import React from 'react';
// render creates a simulated DOM in a Node.js environment to approximate the DOM
// cleanup function is used to remove components from the DOM to prevent memory leaking and data/variable collisions
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect'
import About from '..';

// ensures that after each test, we clean any extra datat that could give us false results
afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });
    // Second Test aka 'test case'        
   
    it('matches snapshot DOM node structure', () => {
        // asFragment returns a snapshot of the rendered component
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
})