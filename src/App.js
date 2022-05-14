// treat App.js as the wrapper component that houses all the other components
// to effect any change on the application, we need to modify this file or add components inside it
import React, { useState } from 'react';
// index.js is implied;
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';


function App() {
  // not necessary to use state here, especially without a Setter
  const [categories] = useState([
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);


  const [currentCategory, setCurrentCategory] = useState(categories[0])

  return (
    // looks like HTML but actually it's a language called JSX, which can represent HTML in JavaScript
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
