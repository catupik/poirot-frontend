import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTotalItems } from "./redux/cartSlice";

const Navigation = ({ isMenuOpen, toggleMenu, isAuthenticated, loginWithRedirect, handleLogOut }) => {
    const handleLinkClick = () => {
        toggleMenu();
    };
    const totalItems = useSelector(getTotalItems);
    console.log(totalItems)
    return (
        <nav className="navburger">
            <div>
                <div>
                  <p className="poirot-title">POIROT</p>
                  <h6 className="motto">Method. Order. And little grey cells</h6> 
                </div>
                <div className="icon-with-badge">
                    <img onClick={toggleMenu} className="burger-icon" src="/poirot/detective.png" alt="Menu Icon"/>
                    {totalItems > 0 && <span className="badge">{totalItems}</span>}
                    </div>
            </div>
            
            <div className={isMenuOpen ? "nav-links active" : "nav-links"}>
                <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
                <NavLink to="/about" onClick={handleLinkClick}>About Me</NavLink>
                <NavLink to="/cases" onClick={handleLinkClick}>Cases</NavLink>
                <NavLink to="/services" onClick={handleLinkClick}>Services</NavLink>
                <NavLink to="/contact" onClick={handleLinkClick}>Contact Me</NavLink>
                <NavLink to="/shop" onClick={handleLinkClick}>Shop</NavLink>
                <NavLink to="/cart" onClick={handleLinkClick}>Cart</NavLink>
                <NavLink to="/myaccount" onClick={handleLinkClick}>My Account</NavLink>
                {!isAuthenticated && (
                    <NavLink to="/login" onClick={() => { loginWithRedirect(); handleLinkClick(); }}>Log in</NavLink>
                )}
                {isAuthenticated && (
                    <NavLink to="/login" onClick={() => { handleLogOut(); handleLinkClick(); }}>Log out</NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navigation;

