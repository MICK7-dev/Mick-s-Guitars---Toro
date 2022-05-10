import '../App.scss';
import Item from './item';

function ItemList({items}) {
  return (
    <div className='container'>
      {items.map(({title, id, price, pictureUrl}) =>
        <Item key={id} id={id} title={title} price={price} pictureUrl={pictureUrl}></Item>
      )}
    </div>
  )
}

export default ItemList