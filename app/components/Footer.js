import React from "react";

function Footer() {
    return (
        <section>
            <footer className='footer'>
                <div className='container'>
                    <div className='footer__container'>
                        <nav className='footer__nav'>
                            <div className='footer__logo'>
                                <a href='./index.html' className="logo-link">
                                    <span className="logo">FineDine</span>
                                </a>
                            </div>
                            <ul className='footer__menu'>
                                <li><a className='link' href='#menu-section'>Menu</a></li>
                                <li><a className='link' href='#reserve-section'>Reserve</a></li>
                                <li><a className='link' href='#about-us-section'>About Us</a></li>
                                <li><a className='link' href='#attitude-section'>Attitude</a></li>
                            </ul>
                        </nav>
                        <address className='footer__address'>
                            <div className="footer__address_contacts">
                                <ul className='footer__address-list'>
                                    <li><a className='footer__address-link' href='tel:+13465812787'>+1 (346) 581 2787</a></li>
                                    <li><a className='footer__address-link' href='mailto:finedine@gmail.com'>finedine@gmail.com</a>
                                    </li>
                                    <li><a className='footer__address-link' href='https://maps.app.goo.gl/NGo3D7xp9A1fQ61s7'
                                           target='_blank'>
                                        4206 Duval St, Austin, TX 78751, USA</a></li>
                                </ul>

                                <div className="">
                                    <a href='#'>
                                        <svg className='footer__address-icon' width='32' height='32'>
                                            <use href='./images/icons.svg#icon-facebook'></use>
                                        </svg>
                                    </a>
                                    <a href='#'>
                                        <svg className='footer__address-icon' width='32' height='32'>
                                            <use href='./images/icons.svg#icon-instagram'></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='footer__address-info'>
                                <a className='footer__address-link' href='#' target='_blank'>Privacy Policy</a>
                                <p className='footer__address-copyright'>&copy; 2024 Copyright</p>
                            </div>

                        </address>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer;