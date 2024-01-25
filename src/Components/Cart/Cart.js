import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);


  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <h2 className="cart-title">Your cart is empty</h2>
      ) : (
        <div>
          <div className="sticky">
           <h2 className="cart-title">TOTAL: £{totalPrice}</h2>
           <button className="btn">Check out</button>
          </div>
          
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.itemId} cartItem={cartItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
