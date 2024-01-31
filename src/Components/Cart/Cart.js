import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import Stripe from "../../Stripe/StripeContainer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Cart = () => {
  
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  
  const cartTitleRef = useRef(null);
  const cartItemsAndTotalRef = useRef([]);
  cartItemsAndTotalRef.current = [];

  const addToRefs = (el) => {
    if (el && !cartItemsAndTotalRef.current.includes(el)) {
      cartItemsAndTotalRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

   
    if (cartTitleRef.current) {
      gsap.fromTo(
        cartTitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 }
      );
    }

   
    cartItemsAndTotalRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);


  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <h2 className="cart-title" ref={cartTitleRef}>Your cart is empty</h2>
      ) : (
        <div>
          <div className="sticky" ref={addToRefs}>
           <h2 className="cart-title">TOTAL: £{totalPrice}</h2>
           {/* <button className="btn">Check out</button> */}
           <Stripe/>
          </div>
       
         {cartItems.map((cartItem) => (
            <div ref={addToRefs} key={cartItem.itemId}>
            <CartItem cartItem={cartItem} />
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
