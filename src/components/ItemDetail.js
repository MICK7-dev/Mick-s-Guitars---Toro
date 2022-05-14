
import '../App.scss';
import ItemCount from './ItemCount'

const ItemDetail = ({ guitarDetail }) => {

  return (
    <>
      <section key={guitarDetail.id} className="detail">
        <div className='content_flex'>
          <div className='img'>
            <img src={guitarDetail.pictureUrl} alt={guitarDetail.title}/>
          </div>
          <div className='info'>
            <h2>{guitarDetail.title}</h2>
            <span>#{guitarDetail.id}</span>
            <p>{guitarDetail.description}</p>
            <h2>{guitarDetail.price}</h2>
            <h3>Stock</h3>
            <span>{guitarDetail.stock}</span>
            <ItemCount stockMax={guitarDetail.stock} stockMin={1}></ItemCount>
            <button>Agregar al Carrito</button>
          </div>
        </div>
        <div>

        </div>
      </section>
    </>
  )
}

export default ItemDetail