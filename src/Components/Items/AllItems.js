import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dataItems from "../../data/dataItems";
import AllItemsCategories from "../ItemsFilter/AllItemsCategories";
import Item from "./Item";
import { useSelector } from "react-redux";
import { getItemsSelectedCategory } from "../../redux/itemsSlice";

const AllItems = () => {
  const selectedItemsCategory = useSelector(getItemsSelectedCategory);
  
  const introTextRef = useRef(null);
  const categoriesAndItemsRef = useRef([]);
  categoriesAndItemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !categoriesAndItemsRef.current.includes(el)) {
      categoriesAndItemsRef.current.push(el);
    }
  };

  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Немедленная анимация для intro-text
    if (introTextRef.current) {
      gsap.fromTo(introTextRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
    }

    // Анимация для AllItemsCategories и элементов списка товаров при скролле
    categoriesAndItemsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="cases-container">
      <p className="intro-text" ref={introTextRef}>
      Bonjour, mes amis! <br />
        <br />I am delighted to introduce you to my unique online store. Here
        you will find exclusive souvenirs and items that will awaken the
        detective spirit within you and allow you to experience the atmosphere
        of my thrilling investigations.
      </p>

      <AllItemsCategories ref={addToRefs}/>

      <div className="allServices">
        {dataItems
          .filter((item) => {
            if (selectedItemsCategory === "All categories") return true;
            return item.category === selectedItemsCategory;
          })
          .map((item) => (
            <div  ref={addToRefs}>
                 <Item key={item.id} item={item} />
            </div>
           
          ))}
      </div>
    </div>
  );
};

export default AllItems;
