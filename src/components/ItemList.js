import { useState } from 'react';
import '../stylesheets/ItemList.css'
import Item from './Item';

const items = [
    {id: 1, title: "KGWL", description: "example text", price: 21000, pictureUrl:`../media/example-item-1.jpeg`, stock: 10 },
    {id: 2, title: "KGWL2", description: "example text2", price: 22000, pictureUrl:`../media/example-item-1.jpeg`, stock: 10 }
];

function ItemList(){

    const data = useState([]);

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items);
            }, 5000);
        });
    }

    getItems().then((datos) => console.log(datos));

    return (
        <div className='item-list'>
            {
            items.map(item => 
                <Item
                    key={item.id} 
                    name= {item.title} 
                    price = {item.price}
                    image= {require(`../media/example-item-1.jpeg`)}
                    stock= {item.stock}
                />
            )}
        </div>
    );    
}

export default ItemList;