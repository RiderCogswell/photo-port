import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = (props) => {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;
    
    useEffect(() => {
        // first argument is the callback function
        document.title = capitalizeFirstLetter(currentCategory.name);
        // second argument is an array with a single element
    }, [currentCategory]);



    return(
        <header>
            <h2>
                <a data-testid='link' href='/'>
                    <span role='img' aria-label='camera'>
                        {' '}
                        📸
                    </span>{' '} 
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    {/* another short circuit function, if contactSelected add navActive as class */}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a data-testid='about' href='#about' onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {/* note that the .map() must return only a single JSX element - (), versus multiple - {} */}
                    {categories.map((category) => (
                        <li
                            // 'Short-circuit' expression, 
                            className={`mx-1 ${
                                // as long as left side is true, the right side gets evaluated and sets navActive as a class
                                currentCategory.name === category.name && !contactSelected && `navActive`
                            }`} key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;