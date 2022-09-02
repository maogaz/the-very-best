import '../stylesheets/CartWidget.css'

function CartWidget(){
    return (
        <img class="shoping-cart" src={require(`../media/shoping-cart-icon.png`)} width="30"></img>
    );    
}

export default CartWidget;