import dataItems from "../../data/dataItems";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateCartFromLocalStorage,
} from "../../redux/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";




const CartItem = ({ cartItem }) => {

 const MY_URL = 'https://poirot-m4bt.onrender.com'

  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();

  const items = dataItems.find((item) => item.id === cartItem.itemId);



  const handleRemoveFromCart = async () => {
    if (isAuthenticated) {
      try {
        const response = await fetch(
          `${MY_URL}/cart/delete/${user.sub}/${cartItem.itemId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user.sub,
              itemId: cartItem.itemId,
            }),
          }
        );

        if (response.ok) {
          const updatedCartResponse = await fetch(
            `${MY_URL}/cart/${user.sub}`
          );
          if (updatedCartResponse.ok) {
            const updatedCart = await updatedCartResponse.json();
            dispatch(updateCartFromLocalStorage(updatedCart));
          }
        } else {
          console.error("Failed to remove item from database");
        }
      } catch (error) {
        console.error("Error removing item from database:", error);
      }
    } else {
      dispatch(removeItemFromCart({ cartItemId: cartItem.id }));
    }
  };

  return (
    <div className="cart-item">
      
      <img
        className="cart-item-img"
        src={`items/${items.image}.jpeg`}
        alt="item"
        width="200"
      />
      <div className="cart-item-info">
      <h3>{items.name}</h3>
        <p>{cartItem.quantity} pcs.</p>
        <p>Price: £ {cartItem.totalPrice}</p>
      </div>

      <img
        onClick={handleRemoveFromCart}
        className="delete-icon cart-item-remove"
        src="/account/free-icon-garbage-bin-323811.png"
        alt="delete-icon"
        width="40" 
      />
    </div>
  );
};

export default CartItem;
