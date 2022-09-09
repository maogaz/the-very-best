import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js';

function App(){
    return (
        <div>
        <NavBar />
        <ItemListContainer 
            name='Nonagon Infinity'
            price="21.000"
            image= {require(`./media/example-item-1.jpeg`)}
            stock={10}
        />
        </div>
      );
}

export default App;