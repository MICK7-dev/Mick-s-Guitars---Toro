
import { useEffect, useState } from 'react';
import '../App.scss';
import ItemList from './ItemList';
import { getGuitars } from './guitars'


const ItemListContainer = () => {

  const [guitars , setGuitars] = useState([]);

  useEffect(() => {
    getGuitars()
    .then((res) => {
      setGuitars(res);
    })
    .catch((error) => console.log(error))
  }, [])

  // const task = new Promise((resolve, reject)=> {
  //   setTimeout(() => {
  //     resolve('exito')
  //   }, 2000)
  // }); 

  // task.then((res) => {
  //   document.querySelector('.cards').classList.add('class_flex')
  // })
  




  return (
    <section className='cards'>
      <ItemList guitars={guitars}></ItemList>
    </section>
  )
}


export default ItemListContainer;

