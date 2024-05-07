import {useParams} from "react-router-dom";
import items from './data';

export default function MenuItem() {
    const {id} = useParams();
    const item = items.find(i => i.id === +id);
    console.log(items, item, typeof id);
    return (
        <section className="section-item">
            <div className='container section-item-container'>
                <div className="menu-item-photo"><img src={item.img} alt={item.title}/></div>
                <div className="menu-item-content">
                    <h2 className='menu-item-h2'>{item.title}</h2>
                    <p className='menu-item-price'>${item.price}</p>
                    <p className='menu-item-p'>{item.ingredients}</p>
                </div>
            </div>
        </section>
    );
}
