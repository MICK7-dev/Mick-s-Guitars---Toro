import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
    </div>
  );
}

export default CartWidget;