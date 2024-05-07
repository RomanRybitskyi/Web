import React from "react";
import diet from "../images/popular-diets-4.jpg";
import restaurant from '../images/hi---12.1589386418.5272.jpg';
import ai from '../images/ai-banner-800x450_tcm100-7204059_tcm100-6286607-32.jpg';
import assistant from '../images/Nutritionist.jpg';
import left from '../images/icons.svg#icon-arrow';
function Home() {
    return (
        <section>
                <section className='hero-section'>
                    <div className='container'>
                        <h1 className='hero-section__title'>It's not just Food<br /><span className='text-brand'>It's an Experience</span>
                        </h1>
                        <button className='hero-section__button button modal-btn-open' type='button'>Order online</button>
                    </div>
                </section>
                <section className='advantages-section'>
                    <div className='container'>
                        <h2 className='visually-hidden'>Наші переваги</h2>
                        <ul className='advantages-section__list'>
                            <li className='advantages-section__item'>AI-based Recommendation</li>
                            <li className='advantages-section__item'>Efficient Delivery Operations</li>
                            <li className='advantages-section__item'>Embracing Sustainability and Eco-Friendly Practices</li>
                        </ul>
                    </div>
                </section>
                <section className='about-us-section section' id='about-us-section'>
                    <div className='container'>
                        <div className='about-us-section__container'>
                            <div className='about-us-section__content'>
                                <h2 className='about-us-section__title section__title'>About Us</h2>
                                <p>At <span className='text-brand text-bold'>FineDine</span> we believe that dining is
                                    more than just a meal; it's an experience that should nourish the body and delight the senses.
                                    For over three decades, we have been dedicated to serving our customers with the finest culinary
                                    creations, crafted with the freshest ingredients and the utmost attention to detail.</p>
                                <p className='about-us__text about-us-section__text--limited'> <span
                                    className='text-brand text-bold'>Join us on a culinary
                        journey that transcends the ordinary.</span> Explore our diverse data, embrace our innovative
                                    approach, and savor the flavors that have made <span
                                        className='text-brand text-bold'>FineDine</span> an internationally recognized
                                    destination for
                                    culinary excellence.</p>
                            </div>
                            <img className="about-us-section__image"
                                 src={restaurant} width="450"
                                 alt='Restaurant' />
                        </div>
                    </div>
                </section>
                <section className='attitude-section section' id='attitude-section'>
                    <div className='container'>
                        <h2 className='attitude-section__title section__title section__title--centered'>Our special <br /> <span
                            className='text-brand-dark'>attitude</span>
                        </h2>
                        <ul className='attitude-section__list'>
                            <li className='attitude-section__item'>
                                <article className='attitude-card'>
                                    <img className='attitude-card__photo'
                                         src={ai} alt='AI-System' />
                                        <div>
                                            <h3 className='attitude-card__title'>AI-System</h3>
                                            <div className='attitude-card__text'>
                                                <p>FineDine has implemented a cutting-edge AI-based recommendation system that analyzes
                                                    customers' preferences, previous orders, and highly rated data items to provide
                                                    personalized suggestions, ensuring a tailored and delightful dining experience. </p>
                                            </div>
                                        </div>
                                </article>
                            </li>
                            <li className='attitude-section__item'>
                                <article className='attitude-card'>
                                    <img className='attitude-card__photo' src={assistant} alt='Nutritionist'/>
                                        <div>
                                            <h3 className='attitude-card__title'>Chat with nutritionist</h3>
                                            <p className='attitude-card__text'>FineDine's "Chat with a Nutritionist" feature connects
                                                health-conscious diners with qualified professionals for personalized advice on data
                                                choices aligning with their dietary goals and nutritional needs.
                                            </p>
                                        </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='menu-section section' id='menu-section'>
                    <div className='container'>
                        <h2 className='menu-section__title section__title section__title--centered'>Menu</h2>
                        <div className='menu-section__slider'>
                            <button className='menu-section__button carousel-button prev' type='button'>
                                <svg className='carousel-button__arrow' width='16' height='16'>
                                    <use href={left}></use>
                                </svg>
                            </button>
                            <div className="menu-section__container swiper-container">
                                <ul className='menu-section__list swiper-wrapper'>
                                    <li className='swiper-slide'>
                                        <article className='menu-card'>
                                            <img className="menu-card__image" src={diet} alt="Diets" />
                                            <h3 className='menu-card__title' lang='en'>Diets</h3>
                                            <div className='menu-card__text'><p>Vegan: Our extensive vegan menu features a variety of
                                                plant-based dishes that are free from any animal-derived products, including meat,
                                                dairy, and eggs.</p>
                                                <p>Vegetarian: For those who prefer a meat-free diet, our vegetarian selection
                                                    offers a plethora of options, ranging from classNameic pasta dishes to innovative
                                                    vegetable-based entrees.</p>
                                                <p>Keto-Friendly: For those following a low-carb, high-fat ketogenic diet, FineDine
                                                    offers a variety of keto-friendly options. </p>
                                                <p>Paleo: Embracing the principles of the Paleo diet, our Paleo-friendly menu
                                                    features dishes that are free from grains, legumes, and processed foods.</p>
                                            </div>

                                        </article>
                                    </li>
                                    {/*<li className='swiper-slide'>*/}
                                    {/*    <article className='menu-card'>*/}
                                    {/*        <img className="menu-card__image" src={diet} alt="Diets" />*/}
                                    {/*        <h3 className='menu-card__title' lang='en'>Diets</h3>*/}
                                    {/*        <div className='menu-card__text'><p>Vegan: Our extensive vegan menu features a variety of*/}
                                    {/*            plant-based dishes that are free from any animal-derived products, including meat,*/}
                                    {/*            dairy, and eggs.</p>*/}
                                    {/*            <p>Vegetarian: For those who prefer a meat-free diet, our vegetarian selection*/}
                                    {/*                offers a plethora of options, ranging from classNameic pasta dishes to innovative*/}
                                    {/*                vegetable-based entrees.</p>*/}
                                    {/*            <p>Keto-Friendly: For those following a low-carb, high-fat ketogenic diet, FineDine*/}
                                    {/*                offers a variety of keto-friendly options. </p>*/}
                                    {/*            <p>Paleo: Embracing the principles of the Paleo diet, our Paleo-friendly menu*/}
                                    {/*                features dishes that are free from grains, legumes, and processed foods.</p>*/}
                                    {/*        </div>*/}

                                    {/*    </article>*/}
                                    {/*</li>*/}
                                    {/*<li className='swiper-slide'>*/}
                                    {/*    <article className='menu-card'>*/}
                                    {/*        <img className="menu-card__image" src={diet} alt="Diets" />*/}
                                    {/*        <h3 className='menu-card__title' lang='en'>Diets</h3>*/}
                                    {/*        <div className='menu-card__text'><p>Vegan: Our extensive vegan menu features a variety of*/}
                                    {/*            plant-based dishes that are free from any animal-derived products, including meat,*/}
                                    {/*            dairy, and eggs.</p>*/}
                                    {/*            <p>Vegetarian: For those who prefer a meat-free diet, our vegetarian selection*/}
                                    {/*                offers a plethora of options, ranging from classNameic pasta dishes to innovative*/}
                                    {/*                vegetable-based entrees.</p>*/}
                                    {/*            <p>Keto-Friendly: For those following a low-carb, high-fat ketogenic diet, FineDine*/}
                                    {/*                offers a variety of keto-friendly options. </p>*/}
                                    {/*            <p>Paleo: Embracing the principles of the Paleo diet, our Paleo-friendly menu*/}
                                    {/*                features dishes that are free from grains, legumes, and processed foods.</p>*/}
                                    {/*        </div>*/}

                                    {/*    </article>*/}
                                    {/*</li>*/}

                                </ul>
                                <div className="pagination">
                                    <span className="pagination__button"></span>
                                    <span className="pagination__button"></span>
                                    <span className="pagination__button"></span>
                                    <span className="pagination__button"></span>
                                </div>
                            </div>
                            <button className='menu-section__button carousel-button next' type='button'>
                                <svg className='carousel-arrow' width='16' height='16'>
                                    <use href={left}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <section className='reserve-section section' id='reserve-section'>
                    <div className='container'>
                        <div className='reserve-section__container'>
                            <div className='reserve-section__form'>
                                <h2 className='reserve-section__title section__title'>Reservation</h2>
                                <p>Fill out the form so we can contact you!</p>
                                <form className="reserve-form" name="reserve-form" autoComplete="off">
                                    <div className="reserve-section__form-field input">
                                        <label className="input__label visually-hidden" htmlFor="user-name">Name</label>
                                        <input className="input__control" type="text" id="user-name" name="user-name"
                                               placeholder="Name"/>
                                    </div>
                                    <div className="reserve-section__form-field input">
                                        <label className="input__label visually-hidden" htmlFor="user-tel">Phone</label>
                                        <input className="input__control" type="tel" id="user-tel" name="user-tel"
                                               placeholder="Phone"/>
                                    </div>
                                    <div className="reserve-section__form-field input">
                                        <label className="input__label visually-hidden" htmlFor="user-email">Email</label>
                                        <input className="input__control" type="email" id="user-email" name="user-email"
                                               placeholder="Email"/>
                                    </div>
                                    <button className="reserve-section__button button" type="submit">Order a call</button>
                                    <p className="form-terms">By clicking the button, I agree to the <a
                                        className="form-terms__link" href="#">privacy policy</a></p>
                                </form>
                            </div>
                            <iframe className='reserve-section__map'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2299.017259346569!2d-97.72856821886688!3d30.304507881610583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca76bf71360d%3A0x965f8bf25117cd57!2zNDIwNiBEdXZhbCBTdCwgQXVzdGluLCBUWCA3ODc1MSwg0KHQv9C-0LvRg9GH0LXQvdGWINCo0YLQsNGC0Lgg0JDQvNC10YDQuNC60Lg!5e0!3m2!1suk!2sua!4v1711388053563!5m2!1suk!2sua'
                                    style={{border:0}} allowfullscreen='' loading='lazy'
                                    referrerpolicy='no-referrer-when-downgrade'></iframe>
                        </div>
                    </div>
                </section>
        </section>
    );
}

export default Home;