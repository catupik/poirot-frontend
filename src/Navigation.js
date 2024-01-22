import { NavLink } from "react-router-dom";

const Navigation = ({ isMenuOpen, toggleMenu, isAuthenticated, loginWithRedirect, handleLogOut }) => {
    const handleLinkClick = () => {
        toggleMenu();
    };

    return (
        <nav className="navburger">
            <div>
                <div>
                  <p className="poirot-title">POIROT</p>
                  <h6 className="motto">Method. Order. And little grey cells</h6> 
                </div>
                <img onClick={toggleMenu} className="burger-icon" src="/poirot/detective.png" alt="Menu Icon"/>
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

