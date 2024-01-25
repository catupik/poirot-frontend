import dataItems from "../../data/dataItems";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateCartFromLocalStorage,
  incrementItemQuantity,
  decrementItemQuantity,
} from "../../redux/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";

const CartItem = ({ cartItem }) => {
  const MY_URL = "https://poirot-m4bt.onrender.com";

  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();

  const items = dataItems.find((item) => item.id === cartItem.itemId);

  const handleIncrement = () => {
    const newQuantity = cartItem.quantity + 1;
    dispatch(incrementItemQuantity({ cartItemId: cartItem.id }));
    if (isAuthenticated) {
      updateQuantityInDatabase(newQuantity);
    }
  };

  const handleDecrement = () => {
    const newQuantity = cartItem.quantity - 1;
    if (newQuantity > 0) {
      dispatch(decrementItemQuantity({ cartItemId: cartItem.id }));
      if (isAuthenticated) {
        updateQuantityInDatabase(newQuantity);
      }
    }
  };

  const updateQuantityInDatabase = async (newQuantity) => {
    try {
      const response = await fetch (`${MY_URL}/cart/update-quantity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.sub,
          itemId: cartItem.itemId,
          newQuantity,
        }),
      });
      if(response.ok){

      } else {
        console.error("Failed to update quantity in database")
      }
    } catch(error){
      console.error("Error updating quantity in database:", error);
    }
  }

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
          const updatedCartResponse = await fetch(`${MY_URL}/cart/${user.sub}`);
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
        <div className="quantity">
          <button  onClick={handleDecrement}>
            <img src="/cases/arrowleft.png" alt="btn" />
          </button>
          <span>{cartItem.quantity} pcs.</span>
          <button onClick={handleIncrement}>
            <img src="/cases/arrowright.png" alt="btn" />
          </button>
        </div>
        {/* <p>{cartItem.quantity} pcs.</p> */}
        <p><strong>Price:</strong> £ {cartItem.totalPrice}</p>
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
