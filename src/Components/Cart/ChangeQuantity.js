const ChangeQuantity = ({ quantity, setQuantity }) => {
  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const removeQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newQuantity = Math.max(1, parseInt(value, 10) || 1);
    setQuantity(newQuantity);
  };

  return (
    <div className="change-block">
      <img
        onClick={removeQuantity}
        className="arrowbtn"
        src="/cases/arrowleft.png"
        alt="btn"
      />

      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        className="quantity-input"
      />

      <img
        onClick={addQuantity}
        className="arrowbtn"
        src="/cases/arrowright.png"
        alt="btn"
      />
    </div>
  );
};

export default ChangeQuantity;
