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

  return (
    <div className="change-block">
      <img
        onClick={removeQuantity}
        className="arrowbtn"
        src="/cases/arrowleft.png"
        alt="btn"
      />

      <p> {quantity} </p>

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
