
import './App.scss';
// import Card from './components/Card';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function App() {

  const arr = ["Jim", "Mick"]

  return (
    <div className="App">
      <NavBar/>
      <section className='cards'>
      <ItemListContainer name={arr[0]}>
        <h1>Bienvenidos a Mick's Guitars</h1>
      </ItemListContainer>
        <div className='container'>
        </div>
      </section>
    </div>
  );
}

export default App;
