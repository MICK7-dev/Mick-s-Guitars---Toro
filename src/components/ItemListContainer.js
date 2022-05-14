
import { useEffect, useState } from 'react';
import '../App.scss';
import ItemList from './ItemList';
import { getGuitars } from './guitars'
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [guitars , setGuitars] = useState([]);

  const { categoryID } = useParams(); 
  // console.log(category)

  useEffect(() => {
    getGuitars(categoryID)
    .then((res) => {
      setGuitars(res);
    })
    .catch((error) => console.log(error))
  }, [categoryID])

  return (
    <section className='cards'>
      <ItemList guitars={guitars}></ItemList>
    </section>
  )
}


export default ItemListContainer;

