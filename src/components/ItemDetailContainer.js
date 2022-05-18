
import { useState, useEffect } from 'react';
import '../App.scss';
import ItemDetail from './ItemDetail';
import { getGuitar } from './guitars'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [guitars , setGuitar] = useState([]);

  const { id } = useParams();

  

  useEffect(() => {
    getGuitar(id)
    .then((res) => {
      setGuitar(res);
    })
    .catch((error) => console.log(error))
  }, [id])

  // console.log(id)


  return(
    <ItemDetail guitarDetail={guitars}></ItemDetail>
  )
}

export default ItemDetailContainer;