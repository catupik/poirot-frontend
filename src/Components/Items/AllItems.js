import dataItems from "../../data/dataItems";
import AllItemsCategories from "../ItemsFilter/AllItemsCategories";
import Item from "./Item";
import { useSelector } from "react-redux";
import { getItemsSelectedCategory } from "../../redux/itemsSlice";

const AllItems = () => {
  const selectedItemsCategory = useSelector(getItemsSelectedCategory);
  return (
    <div className="cases-container">
      <p className="intro-text">
      Bonjour, mes amis! <br />
        <br />I am delighted to introduce you to my unique online store. Here
        you will find exclusive souvenirs and items that will awaken the
        detective spirit within you and allow you to experience the atmosphere
        of my thrilling investigations.
      </p>

      <AllItemsCategories />

      <div className="allServices">
        {dataItems
          .filter((item) => {
            if (selectedItemsCategory === "All categories") return true;
            return item.category === selectedItemsCategory;
          })
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default AllItems;
