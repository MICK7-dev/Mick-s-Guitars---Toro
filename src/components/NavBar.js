import '../App.scss';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'


function NavBar() {
  let url = "#";
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Mick's Guitars</Link>
        <ul>
          <li>
            <Link to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/category/guitars">
              GUITARS
            </Link>
          </li>
          <li>
            <Link to="/category/basses">
              BASSES
            </Link>
          </li>
          <li><a href={url}><CartWidget></CartWidget></a></li>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
