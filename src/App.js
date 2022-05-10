
import './App.scss';
// import Card from './components/Card';
import NavBar from './components/NavBar';
// import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
