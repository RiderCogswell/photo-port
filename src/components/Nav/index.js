import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = (props) => {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;
    
    useEffect(() => {
        // first argument is the callback function
        document.title = capitalizeFirstLetter(currentCategory.name);
        // second argument is an array with a single element.w
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
                    <li className='mx-2'>
                        <a data-testid='about' href='#about'>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* note that the .map() must return only a single JSX element - (), versus multiple - {} */}
                    {categories.map((category) => (
                        <li
                            // 'Short-circuit' expression, 
                            className={`mx-1 ${
                                // as long as left side is true, the right side gets evaluated and sets navActive as a class
                                currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category)
                            }}>
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