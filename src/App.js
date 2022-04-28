
import './App.scss';
import Card from './components/Card';
import NavBar from './components/NavBar';
import Class from './components/Class';
import Function from './components/Function';
import ItemListContainer from './components/ItemListContainer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <section className='cards'>
      <ItemListContainer></ItemListContainer>
        <div className='container'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
    </div>
  );
}

export default App;
