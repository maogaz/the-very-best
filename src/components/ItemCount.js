import '../stylesheets/ItemCount.css'

function ItemCount({stock, key}){

    const add_one_item = () => {
        if(document.getElementById("input-item-number").value < stock){
            document.getElementById("input-item-number").value =  parseInt(document.getElementById("input-item-number").value) + 1;
            if(document.getElementById("input-item-number").value === stock){
                document.getElementById("add-one-item").disabled = true;
            }
        }
        if(document.getElementById("input-item-number").value === 2 ){
            document.getElementById("remove-number-item").disabled = false;
        }
    }

    const remove_one_item = () => {
        if(document.getElementById("input-item-number").value > 1 ){
            document.getElementById("input-item-number").value =  parseInt(document.getElementById("input-item-number").value) - 1;
            if(document.getElementById("input-item-number").value === 1 ){
                document.getElementById("remove-number-item").disabled = true;
            }
        }
        if(document.getElementById("input-item-number").value === stock - 1 ){
            document.getElementById("add-one-item").disabled = false;
        }
    }

    return (

                <div className='add-to-cart'>
                    <div className='add-to-cart-item'>
                        <a href="#">
                            <button className= "remove-number-item" id="remove-number-item" onClick={remove_one_item}> - </button>
                        </a>
                    </div>
                    <div className='add-to-cart-item'>
                        <a href="#">
                            <input id = "input-item-number" type="number" placeholder={1} value={1} min={1} max={stock}></input>
                        </a>
                    </div>
                    <div className='add-to-cart-item'>
                        <a href="#">
                            <button className= "add-one-item" id="add-one-item" onClick={add_one_item}> + </button>
                        </a>
                    </div>
                </div>

    );    
}

export default ItemCount;