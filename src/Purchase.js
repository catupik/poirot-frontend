import dataItems from "./data/dataItems";

const Purchase = ({ purchase }) => {
  if (!purchase || !purchase.items) {
    return <div>Loading...</div>;
  }

  const purchaseDate = new Date(purchase.purchaseDate).toLocaleDateString(
    "en-GB"
  );

  return (
    <div key={purchase._id}>
      <h3>Purchase Date: {purchaseDate}</h3>
      <ul>
        {purchase.items.map((item) => {
          const product = dataItems.find((prod) => prod.id === item.itemId);

          return (
            <li key={item._id}>
              <img
                src={`/items/${product.image}.jpg`}
                alt={product.name}
                width="25"
                height="25"
              />
              <strong>{product.name}</strong> - Quantity: {item.quantity}, 
              Price: ${item.pricePerItem}, 
              Total Price: ${item.totalPrice}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Purchase;
