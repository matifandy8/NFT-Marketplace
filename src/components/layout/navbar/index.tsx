import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/auth";

const Navbar = () => {
    const { cartTotalQuantity } = useSelector((state) => state.cart);

  const { user }:any = useAuth()
   const handleLogoutClick = () => {
    alert("Success Logout")
    localStorage.removeItem("supabase.auth.token");
    window.location.reload(); 
  };
    const authButton = () => {
    if (!user) {
      return (
        <div className="noUser">
          <Link to="/login"
            className="login_link"
          >
            Log In
          </Link>
          <Link to="/register" className="register__link">
            Register
          </Link>
        </div>
      );
    } else {
      return (
        <div className="existUser">
          <Link to="/cart" className="cart__link">
          <div className="cart__image">
            <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png"/>
            <span>{ cartTotalQuantity } </span>
          </div>
          </Link>
            <button className="button__blue" onClick={handleLogoutClick}>
              Log out
            </button>
          </div>
      );
    }
  };
  return (
    <div className="navbar">
    <Link to={`/`} className="info__button">   
      <div className="logo">
        <h1 className="logo__text">NFT-Eco</h1>
      </div>
      </Link>
      <div className="burger"></div>
            <div className="navbar__auth">{authButton()}</div>
    </div>
  );
};

export default Navbar;
