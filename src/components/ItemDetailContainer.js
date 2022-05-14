
import { useState, useEffect } from 'react';
import '../App.scss';
import ItemDetail from './ItemDetail';
import { getGuitar } from './guitars'

const ItemDetailContainer = () => {

  const [guitar , setGuitar] = useState([]);

  useEffect(() => {
    getGuitar()
    .then((res) => {
      setGuitar(res);
    })
    .catch((error) => console.log(error))
  }, [])

  console.log(guitar)


  return(
    <ItemDetail guitarDetail={guitar}></ItemDetail>
  )
}

export default ItemDetailContainer;