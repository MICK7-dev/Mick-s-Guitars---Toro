
import '../App.scss';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
 
function Item() {

  const guitarImages = require.context('../assets/images', true);

  const [guitars] = useState([
    {id: 2914224576, title: "PRO SERIES SIGNATURE MICK THOMSON SOLOIST™ SL2", price: "$1.189.990", pictureUrl: guitarImages(`./mickThompson-guitar-V.png`)},
    {id: 2919260568, title: "X SERIES SOLOIST™ SLA6 DX BARITONE", price: "$1.260.130", pictureUrl: guitarImages(`./SLA6_DX_BARITONE.png`)},
    {id: 2803367880, title: "USA SIGNATURE MISHA MANSOOR JUGGERNAUT HT7FM", price: "$3.905.635", pictureUrl: guitarImages('./MANSOOR_JUGGERNAUT_HT7FM.png')},
    {id: 2913335503, title: "Pro Series Signature Chris Broderick Soloist™ 7", price: "$1.050.000", pictureUrl: guitarImages('./Signature_Chris_Broderick_Soloist™_7.png')},
  ])

  return (
    <>
      {guitars.map(g => 
        <div className="card"  key={g.id}>
          <div className="img_bx">
            <img src={g.pictureUrl} alt={g.title}/>
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
              <h3>{g.title}</h3>
            </div>
            <div className="price_rating">
              <h2>{g.price}</h2>
              <span>#{g.id}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Item;