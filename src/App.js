// treat App.js as the wrapper component that houses all the other components
// to effect any change on the application, we need to modify this file or add components inside it
import React from 'react';
import './App.css';
// index.js is implied;
import Nav from './components/Nav';
import About from './components/About';


function App() {
  return (
    // looks like HTML but actually it's a language called JSX, which can represent HTML in JavaScript
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
