import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

const Item = ({ item }) => {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();

  const handleAddToCart = async ()=> {
      if(isAuthenticated) {
        try {
          const response = await fetch('https://poirot-m4bt.onrender.com/cart/add', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user?.sub,
          itemId: item.id,
          quantity: quantity,
          totalPrice: item.price * quantity,
          pricePerItem: item.price
        }),
        });

        if(response.ok){
          dispatch(addItemToCart({ item, quantity }));
        
        } else{
          console.error('Failed to add item to database');
        }
      }catch (error) {
        console.error('Error adding item to database:', error);
      }
  }else{
    dispatch(addItemToCart({ item, quantity }));
  }
};

  return (
    <div className="service-block">
      <div className="service">
        <img src={`/items/${item.image}.jpeg`} alt="item" width="300" />
        <h3>{item.name}</h3>
        <h2>£ {item.price}</h2>
        <p>{item.description}</p>
      </div>
      <div className="change-quantity-container">
      <div className="change-quantity">
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
      </div>
      <button className="service-btn " onClick={handleAddToCart}> 
        Add to cart
        </button>
      </div>
     
    </div>
  );
};

export default Item;
