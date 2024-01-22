import AboutMe from "./AboutMe";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import Cases from "./Cases";
import Services from "./Components/Services/Services";
import ContactMe from "./ContactMe";
import Shop from "./Shop";
import Home from "./Home";
import Cart from "./Components/Cart/Cart"
import Account from "./Account";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartFromLocalStorage } from './redux/cartSlice';
import { useState } from "react";
import Navigation from "./Navigation";
import Loader from "./Loader/Loader";
import Footer from "./Footer";



function App() {
  const { loginWithRedirect, isAuthenticated, logout, user} = useAuth0();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const MY_URL = 'https://poirot-m4bt.onrender.com'
 
 

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 2500)
  },[])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDocumentClick = (e)=>{
    if (isMenuOpen && !document.querySelector('.navburger').contains(e.target)) {
      toggleMenu();
  }}

 


  useEffect(()=>{
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);}
      // eslint-disable-next-line 
  }, [isMenuOpen])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems, dispatch]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      dispatch(updateCartFromLocalStorage(JSON.parse(storedCartItems)));
    }
  }, [dispatch]);

  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        if (user && user.sub && isAuthenticated) {
          const response = await fetch(`${MY_URL}/cart/${user.sub}`);
          if (response.ok) {
            console.log("User has a cart");
            const cartData = await response.json()
            console.log(cartData)
            dispatch(updateCartFromLocalStorage(cartData));
          } else if (response.status === 404) {
            // Пользователь не найден, создаем пользователя с корзиной
            const createCartResponse = await fetch(`${MY_URL}/cart/create`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ userId: user.sub }),
            });
            if (createCartResponse.ok) {
              console.log('User created now and has an empty cart');
            } else {
              console.error('Error creating user cart:', createCartResponse.statusText);
            }
          } else {
            console.error('Error checking user cart:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Error checking user cart or creating user', error);
      }
    };
  
    if (isAuthenticated) {
      handleAuthentication();
    }
  }, [isAuthenticated, dispatch, user, user?.sub]);
  
  
 const handleLogOut = ()=> {
  localStorage.clear();
  logout({returnTo: window.location.origin})
 }

 if (loading ){
  return <Loader/>
 }

 
        
  return(
  <Router>
    
    <nav className="nav">
      
    <NavLink className={({ isActive }) => isActive ? 'Link activeLink' : 'Link'} to="/about">About Me</NavLink>      
    <NavLink className={({ isActive }) => isActive ? 'Link activeLink' : 'Link'}  to="/cases">Cases</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'Link activeLink' : 'Link'}  to="/services">Services</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'Link activeLink' : 'Link'} to="/contact"  >Contact Me</NavLink>
      
      
      <div className="nav-header">
    <NavLink className='Link poirotLink' to="/">POIROT</NavLink>
    <div className="motto">Method. Order. And little grey cells</div>
  </div>

      <NavLink className={({ isActive }) => isActive ? 'Link activeLink' : 'Link'}  to="/shop">Shop</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'Link activeLink' : 'Link'}  to="/cart">Cart</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'Link activeLink' : 'Link'} to='/myaccount'>My Account </NavLink>
      {!isAuthenticated &&(
        <NavLink className='Link' to="/login"
      onClick={loginWithRedirect}>Log in</NavLink>
      )}
      {isAuthenticated &&(
        <NavLink className='Link'  to="/login"
      onClick={handleLogOut}>Log out</NavLink>
      )}
      {/* domain : dev-0iiz3ltupfwws1at.us.auth0.com
      client id: qNWN31ExH4l0aAb47AmVm6jyCvZwn8iP
      secret: bT92uzQMshvBWZFL8Mtm6ll93wQJuJgLQw7YEveIXlYcl4XMqQZ0_-bB-C1yT8V2 */}
     {/* Poirot06081975 */}
    </nav>
    
    <Navigation
    isMenuOpen={isMenuOpen}
    toggleMenu={toggleMenu}
    isAuthenticated={isAuthenticated}
    loginWithRedirect={loginWithRedirect}
  handleLogOut={handleLogOut}
    />

      

    <Routes>
      <Route path="/about" element={<AboutMe />} />
      <Route path="/cases" element={<Cases/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/" element={<Home/>} />
     
      <Route path="/contact" element={<ContactMe/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/myaccount" element={<Account/>}/>
      <Route path="/login" />

    </Routes>

    <Footer/>  
  </Router>
  
  )
}

export default App;
