import '../stylesheets/ItemCount.css'
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';

function Item({name, price, image, stock, key}){

    return (
        <div className='items-container'>
            <div className='item'>
                <div className='item-image-container'>
                    <img className="item-image" src={image} alt={name}></img>
                </div>
                <div className='item-price'>
                    <h1>${price}</h1>
                </div>
                <div className='name'>
                    <h2>{name}</h2>
                </div>
                <div>
                    <ItemDetailContainer description={"Descripcion de ejemplo"} />
                </div>
                <ItemCount 
                    stock={stock}
                    key= {key}
                />
                <div className='add-to-cart-button'>
                    <a href="#">
                        <button> Agregar a carro </button>
                    </a>
                </div>
            </div>
        </div>
    );    
}

export default Item;