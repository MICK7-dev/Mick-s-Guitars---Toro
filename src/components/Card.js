
import '../App.scss';
import Img from '../assets/images/mickThompson-guitar-V.png'
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart,  faStar} from '@fortawesome/free-solid-svg-icons';

function Card() {
  return (
    <div className="App">
      <div className="card">
        <div class="img_bx">
          <img src={Img} alt="MICK_THOMSON_SOLOIST™_SL2"/>
          <ul class="action">
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
        <div class="content">
          <div class="product_name">
            <h3>PRO SERIES SIGNATURE MICK THOMSON SOLOIST™ SL2</h3>
          </div>
          <div class="price_rating">
            <h2>$1.189.990</h2>
            <div class="rating">
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              {/* <i class="fa-solid fa-star grey"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;