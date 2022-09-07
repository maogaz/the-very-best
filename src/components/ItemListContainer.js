import '../stylesheets/ItemListContainer.css'

function ItemListContainer({greeting}){
    return (
        <div className='items-container'>
            <div className='item'>
                <div className='item-image-container'>
                    <img className="item-image" src={require(`../media/example-item-1.jpeg`)} alt=""></img>
                </div>
                <div className='item-price'>
                    <h1>$21.000</h1>
                </div>
                <div className='name'>
                    <h2>Vinilo de ejemplo</h2>
                </div>
                <div className='add-to-cart'>
                    <div className='add-to-cart-item'>
                        <a href="#">
                            <button> - </button>
                        </a>
                    </div>
                    <div className='add-to-cart-item'>
                        <a href="#">
                            <input type="number" placeholder="1" min="1"></input>
                        </a>
                    </div>
                    <div className='add-to-cart-item'>
                        <a href="#">
                            <button> + </button>
                        </a>
                    </div>
                </div>
                <div className='add-to-cart-button'>
                    <a href="#">
                        <button> Agregar a carro </button>
                    </a>
                </div>
            </div>
        </div>
    );    
}

export default ItemListContainer;