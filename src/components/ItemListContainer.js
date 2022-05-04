
import '../App.scss';
import ItemCount from './ItemCount';

const ItemListContainer = ({name, children}) => {
  return (
    <div>
      <h2>{name}</h2>
      {children}
      <ItemCount stockMax={10} stockMin={3}></ItemCount>
    </div>
  )
}


export default ItemListContainer;

