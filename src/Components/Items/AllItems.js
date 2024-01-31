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
  const categoriesRef = useRef(null); 
  const itemsRefs = useRef([]);

 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

   
    if (introTextRef.current) {
      gsap.fromTo(
        introTextRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 2 }
      );
    }

   
    if (categoriesRef.current) {
      gsap.fromTo(
        categoriesRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    
    itemsRefs.current.forEach(el => {
      if (el.current) {
        gsap.fromTo(
          el.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
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

      <div ref={categoriesRef}>
        <AllItemsCategories />
      </div>

      <div className="allServices">
        {dataItems
          .filter((item) => {
            if (selectedItemsCategory === "All categories") return true;
            return item.category === selectedItemsCategory;
          })
          .map((item) => (
            <div key={item.id} ref={el => itemsRefs.current.push({ id: item.id, current: el })}>
              <Item item={item} />
            </div>
           
          ))}
      </div>
    </div>
  );
};

export default AllItems;
