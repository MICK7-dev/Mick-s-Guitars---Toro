
import './App.scss';
// import { useEffect } from 'react';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemsProvider } from './components/CartContext';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <ItemsProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryID' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/Cart/' element={<Cart />} />
          </Routes>
        </ItemsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
