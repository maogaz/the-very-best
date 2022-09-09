import Item from './Item';
import ItemList from './ItemList';

function ItemListContainer({name, price, image, stock}){
    return (
        <div >
            <ItemList />
        </div>
    );    
}

export default ItemListContainer;