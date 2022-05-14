
import '../App.scss';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
 
function Item({ guitar }) {

  return (
    <>
      <div className="card">
        <div className="img_bx">
          <img src={guitar.pictureUrl} alt={guitar.title}/>
          <ul className="action">
            <li>
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              <span>Whislist</span>
            </li>
            <li>
              <CartWidget></CartWidget>
              <span>Cart</span>
            </li>
            <li>
              <Link to={`/item/${guitar.id}`}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Link>
              <span>View</span>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="product_name">
            <h3>{guitar.title}</h3>
          </div>
          <div className="price_rating">
            <h2>{guitar.price}</h2>
            <span>#{guitar.id}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item;