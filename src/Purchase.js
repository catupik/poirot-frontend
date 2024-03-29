import dataItems from "./data/dataItems";

const Purchase = ({ purchase }) => {
  if (!purchase || !purchase.items) {
    return <div>Loading...</div>;
  }

  const purchaseDate = new Date(purchase.purchaseDate).toLocaleDateString(
    "en-GB"
  );

  const totalSum = purchase.items.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div key={purchase._id} className="purchase-item">
      <h3 className="purchase-date">Purchase Date: {purchaseDate}</h3>
      <h3 className="purchase-date">Total: £{totalSum}</h3>
      <ul className="purchase-list">
        {purchase.items.map((item) => {
          const product = dataItems.find((prod) => prod.id === item.itemId);

          return (
            <li key={item._id} className="cart-item-purchase">
            

            <div className="purchase-item-image-block">
                <img
                    src={`items/${product.image}.jpeg`}
                    alt={product.name}
                    className="cart-item-image"
                />
            </div>
            <div className="cart-item-info">
                <strong>{product.name}</strong>
                <br/> {item.quantity} pcs.
                <br />Price: £{item.pricePerItem}
                <br/> Total: £{item.totalPrice}
                
            </div>
        </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Purchase;
