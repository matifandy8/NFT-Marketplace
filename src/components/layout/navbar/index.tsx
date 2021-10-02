import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
    <Link to={`/`} className="info__button">   
      <div className="logo">
        <h1 className="logo__text">NFT-Eco</h1>
      </div>
      </Link>
      <div className="burger"></div>
    </div>
  );
};

export default Navbar;
