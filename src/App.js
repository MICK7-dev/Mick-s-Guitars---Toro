
import './App.scss';
// import Card from './components/Card';
import NavBar from './components/NavBar';
// import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';


function App() {

  const arr = ["PRO SERIES SIGNATURE MICK THOMSON SOLOIST™ SL2", "Mick"]

  return (
    <div className="App">
      <NavBar/>
      <section className='cards'>
      <ItemListContainer name={arr[0]}></ItemListContainer>
        <div className='container'>
          
        </div>
      </section>
    </div>
  );
}

export default App;
