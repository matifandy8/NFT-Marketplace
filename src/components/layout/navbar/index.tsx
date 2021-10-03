import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/auth";

const Navbar = () => {
  const { user }:any = useAuth()
   const handleLogoutClick = () => {
    alert("Success Logout")
    localStorage.removeItem("supabase.auth.token");
    window.location.reload(); 
  };
    const authButton = () => {
    if (!user) {
      return (
        <div>
          <Link to="/login"
            className="login_link"
          >
            Log In
          </Link>
          <Link to="/regiter" className="register__link">
            Register
          </Link>
        </div>
      );
    } else {
      return (
        <div className="existUser">
         
            <button className="logout" onClick={handleLogoutClick}>
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
