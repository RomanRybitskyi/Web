import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map(item => item.category))];

function MenuP() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = category => {
        console.log('click', category);
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <section className="body-menu menu section">
            <Categories categories={categories} filterItems={filterItems}/>
            <Menu items={menuItems}/>
        </section>
    );
}

export default MenuP;
