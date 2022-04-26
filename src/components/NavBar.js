import '../App.scss';


function NavBar() {
  let url = "#";
  return (
    <div className="App">
      <header className="App-header">
        <a href={url}>Mick's Guitars</a>
        <ul>
          <li><a href={url}>HOME</a></li>
          <li><a href={url}>GUITARS</a></li>
          <li><a href={url}>BASSES</a></li>
          <li><a href={url}>ACCESSORIES</a></li>
          <li><a href={url}>SHOP</a></li>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
