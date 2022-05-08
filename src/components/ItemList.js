import '../App.scss';
import Item from './item';

function ItemList() {

  

  const task = new Promise((resolve, reject)=> {
    setTimeout(() => {
      return(
        <>
          {Item}
        </>
      )
    }, 2000)
  }); 
    

  task.then( Item => {
    console.log(Item);
  });


  return (
    <div className='container'>
      {/* <Item></Item> */}
    </div>
  )
}

export default ItemList