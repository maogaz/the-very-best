import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js';

function App(){
    return (
        <div>
        <NavBar />
        <ItemListContainer 
            greeting='Este es un texto de ejemplo'
        />
        </div>

      );
}

export default App;