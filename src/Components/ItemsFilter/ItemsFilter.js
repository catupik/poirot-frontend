import {
  filterItemsCategory,
  getItemsSelectedCategory,
} from "../../redux/itemsSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemsFilter = ({ categories }) => {
  const dispatch = useDispatch();
  const selectedItemsCategory = useSelector(getItemsSelectedCategory);

  const handleItemsCategoryChange = (event) => {
    dispatch(filterItemsCategory(event.target.value));
  };

  return (
    <div>
      <label htmlFor="categorySelect"><h3>Choose a category</h3> </label> 
      <select id="categorySelect" onChange={handleItemsCategoryChange} value={selectedItemsCategory}
      className="custom-select">

        <option value="All categories">All categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ItemsFilter;
