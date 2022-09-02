import '../stylesheets/NavBar.css'
import CartWidget from './CartWidget';

function NavBar(){
    return (
        <div>
            <nav>
                <CartWidget />
                <a href="#">Música</a>
                <a href="#">Películas</a>
                <a href="#">Series</a>
                <a href="#">Libros</a>
            </nav>
        </div>
    );    
}

export default NavBar;
