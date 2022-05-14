import '../App.scss';
import Item from './item';

function ItemList({ guitars }) {
  return (
    <div className='container'>
      {guitars.map((gui) => (
        <Item key={gui.id} guitar={gui}></Item>
      ))}
    </div>
  )
}

export default ItemList