import ItemsFilter from "./ItemsFilter";

const AllItemsCategories = () => {

  const categories = [
    "Clothing",
    "Collectibles",
    "Games",
    "Tools",
    "Stationery",
    "Perfume",
    "Home & Life",
    "Accessories",
  ]
  return (
  

    <div className="allItemsCategories">
      <ItemsFilter categories={categories}/>
      
    </div>
  );
};

export default AllItemsCategories;
