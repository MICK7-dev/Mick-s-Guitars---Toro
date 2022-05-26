
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { getGuitar } from './guitars'
import { useParams } from 'react-router-dom';
import { ItemsContext } from "./CartContext";

function ItemCount({stockMax , stockMin, guitarDetail}) {

  const [count, setCount] = useState(stockMin);

  const handleClick = () => {
    if (count >= stockMax ) {
      alert("El stock maximo es " + stockMax );
      return;
    }
    setCount(count + 1);
    // console.log(count)
  };

  const handleClickRest = () => {
    if (count <= stockMin) {
      alert("El stock minimo es " + stockMin);
      return;
    }
    setCount(count - 1);
    // console.log(count)
  };

  const [product, setProduct] = useState([count]);
  const { id } = useParams();

  useEffect(() => {
    getGuitar(id)
    .then((res) => {
      setProduct(res);
    })
    .catch((error) => console.log(error))
  }, [id])
  
  // console.log(product)
  const [items, setItems] = useContext(ItemsContext);
  const producCart = count;
  const newObj = { obj: product, quantity: producCart }

  
  
  return (
    <div className='CountContainer'>
      <div className='Counter'>
        <button onClick={handleClickRest}>
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </button>
        <span>{count}</span>
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </div>
      <Link onClick={() => setItems(newObj)} to={'/Cart'}>Comprar</Link>
    </div>
  );

}

export default ItemCount;