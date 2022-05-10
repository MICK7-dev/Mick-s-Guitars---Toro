
import '../App.scss';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart} from '@fortawesome/free-solid-svg-icons';
 
function Item({id, title, price, pictureUrl}) {

  return (
    <>
      <div className="card">
        <div className="img_bx">
          <img src={pictureUrl} alt={title}/>
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
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              <span>View</span>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="product_name">
            <h3>{title}</h3>
          </div>
          <div className="price_rating">
            <h2>{price}</h2>
            <span>#{id}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item;