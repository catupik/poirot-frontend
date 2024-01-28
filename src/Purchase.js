
const Purchase = (purchase) =>{
    if (!purchase || !purchase.items) {
        return <div>Loading...</div>;
    }

    const purchaseDate = new Date(purchase.purchaseDate).toLocaleDateString('en-US');

    return(

        <div key={purchase._id}>
        <h3>Purchase Date: {purchaseDate}</h3>
        <ul>
          {purchase.items.map((item) => (
            <li key={item._id}>
              Item ID: {item.itemId}, Quantity: {item.quantity}, 
              Price Per Item: ${item.pricePerItem}, 
              Total Price: ${item.totalPrice}
            </li>
          ))}
        </ul>
      </div>
    )
}
export default Purchase;