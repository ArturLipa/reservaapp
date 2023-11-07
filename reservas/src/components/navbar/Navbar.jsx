import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContex } from "../../context/AuthContext";

const Navbar = () => {

const { user } = useContext(AuthContex);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
        <span className="logo" style={{color:"white",textDecoration:"none"}}>RESERVAS ONLINE</span>
        </Link>
        {user ? user.username:(
          <div className="navItems">
          <link to="/register" className="navButton">Registro</link>
          <link to="/login" className="navButton">Acceder</link>
          </div>
        )}
       
      </div>
    </div>
  )
}

export default Navbar