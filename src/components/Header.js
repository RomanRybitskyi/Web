import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <section>
            <header className='header'>
                <div className='container'>
                    <div className='header__container'>
                        <nav className='header__nav'>
                            <Link to='/' className="logo-link">
                                <span className="logo">FineDine</span>
                            </Link>
                            <ul className='header__menu'>
                                <li><a className='link' href='#menu-section'>Menu</a></li>
                                <li><a className='link' href='#reserve-section'>Reserve</a></li>
                                <li><a className='link' href='#about-us-section'>About Us</a></li>
                                <li><a className='link' href='#attitude-section'>Attitude</a></li>
                                <li><Link className='link' to='/sign-up'>Sign up</Link></li>
                            </ul>
                        </nav>
                        <button className='header__button button modal-btn-open' type='button'>Order online</button>
                        <button className="header__burger menu-btn-open" type="button">
                            <svg width="24" height="24">
                                <use href='./images/icons.svg#icon-menu'></use>
                            </svg>
                        </button>
                        <div className="mobile-menu">
                            <button className='mobile-menu__btn-close menu-btn-close' type="button">Close</button>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Header;