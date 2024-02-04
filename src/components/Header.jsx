import React from 'react';
import {Link} from 'react-router-dom';
// Как определить на какой странице находишься?

const Header = (props) => {
    return (
        <header>
            <div className='nav-container'>
                <ul className='navigation'>
                    <li><Link to='/'> Главная </Link></li>
                    <li><Link to='/contacts'> Контакты </Link></li>
                    <li><Link to='/weather'> Погода </Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;