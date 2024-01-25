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
                    {isPlaying ? <img className="music-btn" src="/account/play.png" alt="play" width='30'/> : <img className="music-btn" src="/account/noplay.png" alt="pause" width='30'/>  }
                 </button>
                 <audio ref={audioRef} src={music} loop/>
                <div className="icon-with-badge">
                    <img onClick={toggleMenu} className="burger-icon" src="/poirot/detective.png" alt="Menu Icon"/>
                    {totalItems > 0 && <span className="badge">{totalItems}</span>}
                    </div>
            </div>
            
            <div className={isMenuOpen ? "nav-links active" : "nav-links"}>
                <NavLink className='Link' to="/" onClick={handleLinkClick}>HOME</NavLink>
                <NavLink className='Link' to="/about" onClick={handleLinkClick}>ABOUT</NavLink>
                <NavLink className='Link' to="/cases" onClick={handleLinkClick}>CASES</NavLink>
                <NavLink className='Link' to="/services" onClick={handleLinkClick}>SERVICES</NavLink>
                <NavLink className='Link' to="/contact" onClick={handleLinkClick}>CONTACT</NavLink>
                <NavLink className='Link' to="/shop" onClick={handleLinkClick}>SHOP</NavLink>
                <NavLink className='Link' to="/cart" onClick={handleLinkClick}>CART</NavLink>
                <NavLink className='Link' to="/myaccount" onClick={handleLinkClick}>ACCOUNT</NavLink>
                {!isAuthenticated && (
                    <NavLink to="/login" className='Link' onClick={() => { loginWithRedirect(); handleLinkClick(); }}>LOGIN</NavLink>
                )}
                {isAuthenticated && (
                    <NavLink to="/login"  className='Link' onClick={() => { handleLogOut(); handleLinkClick(); }}>LOGOUT</NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navigation;

