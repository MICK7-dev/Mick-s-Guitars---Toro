
import '../App.scss';

const ItemListContainer = ({name, children}) => {
  return (
    <div>
      <h2>{name}</h2>
      {children}
    </div>
  )
}


export default ItemListContainer;

