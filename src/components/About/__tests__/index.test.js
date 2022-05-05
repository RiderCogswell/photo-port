import React from 'react';
// render creates a simulated DOM in a Node.js environment to approximate the DOM
// cleanup function is used to remove components from the DOM to prevent memory leaking and data/variable collisions
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect'
import About from '..';