import React from 'react';
import Link from "next/link";


const Menu = ({items}) => {
    return (
        <div className="section-center">
            {items.map(menuItem => {
                const {id, title, img, desc, price} = menuItem;
                return (
                    <Link href={`/menu/${id}`}>
                        <article key={id} className="menu-item">
                            <img src={img} alt={title} className="photo-menu"/>
                            <div className="item-info">
                                <div className='header-menu'>
                                    <h4>{title}</h4>
                                    <h4 className="price">${price}</h4>
                                </div>
                                <p className="item-text">{desc}</p>
                            </div>
                        </article>
                    </Link>
                );
            })}
        </div>
    );
};

export default Menu;
