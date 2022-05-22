
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

function ItemCount({stockMax , stockMin}) {

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

  
  const addCart = () => {
    const producCart = count
    console.log(producCart)
    return count
  }
  
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
      <Link onClick={() => addCart()} to={'/Cart'}>Comprar</Link>
    </div>
  );

}

export default ItemCount;