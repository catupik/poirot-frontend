import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTotalItems } from "./redux/cartSlice";

import music from './poirot.mp3'

const Navigation = ({ isMenuOpen, toggleMenu, isAuthenticated, loginWithRedirect, handleLogOut, togglePlay, isPlaying, audioRef }) => {
    const handleLinkClick = () => {
        toggleMenu();
    };
    const totalItems = useSelector(getTotalItems);
    
    return (
        <nav className="navburger">
            <div>
                <div>
                  <p className="poirot-title">POIROT</p>
                  <h6 className="motto">Method. Order. And little grey cells</h6> 
                </div>

                <button className="music" onClick={togglePlay}>
                    {isPlaying ? <img className="music-btn" src="/account/noplay.png" alt="pause" width='30'/> : <img className="music-btn" src="/account/play.png" alt="play" width='30'/>}
                 </button>
                 <audio ref={audioRef} src={music} loop/>
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

