/* import logo from './logo.svg';
 */import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div >
      <Navbar />
      <ItemListContainer greeting="Hola,que tal" />
    </div>
  );
}

export default App;
