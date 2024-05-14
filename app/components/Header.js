'use client';

import React, {useState} from "react";

import Modal from "./Modal";
import Link from "next/link";
import {UserButton} from "@clerk/nextjs";
import {useUser} from "@clerk/clerk-react";

function Header() {
    const {isSignedIn, user} = useUser();
    const userId = isSignedIn ? user.id : null;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <section>
            <header className='header'>
                <div className='container'>
                    <div className='header__container'>
                        <nav className='header__nav'>
                            <Link href='/' className="logo-link">
                                <span className="logo">FineDine</span>
                            </Link>
                            <ul className='header__menu'>
                                <li><Link href='/menu' className="link">Menu</Link></li>
                                <li><a className='link' href=''>Reserve</a></li>
                                <li><a className='link' href=''>About Us</a></li>
                                <li><a className='link' href=''>Attitude</a></li>
                                {!userId && (
                                    <>
                                        <li><Link className='link' href='sign-up'>Sign Up</Link></li>
                                        <li><Link className='link' href='sign-in'>Sign In</Link></li>
                                    </>
                                )}
                                {userId && (
                                    <Link href="profile" className='link'>Profile</Link>
                                )}
                                <li><UserButton afterSignOutUrl='/'/>
                                </li>
                            </ul>
                        </nav>
                        <button className='header__button button modal-btn-open' type='button'
                                onClick={handleModalOpen}>Order online
                        </button>
                        <button className="header__burger menu-btn-open" type="button">
                            <svg width="24" height="24">
                                <use href='./images/icons.svg#icon-data'></use>
                            </svg>
                        </button>
                        <div className="mobile-menu">
                            <button className='mobile-menu__btn-close menu-btn-close' type="button">Close</button>
                        </div>
                    </div>
                </div>
            </header>
            <Modal isOpen={isModalOpen} onClose={handleModalClose}/>
        </section>
    );
}

export default Header;