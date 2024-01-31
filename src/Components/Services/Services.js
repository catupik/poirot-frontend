import { getSelectedCategory } from "../../redux/servicesSlice";
import { useSelector } from "react-redux";
import AllCategories from "../Filter/AllCategories";
import Service from "./Service";
import dataService from "../../data/dataServices";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function Services() {
  const selectedCategory = useSelector(getSelectedCategory);
  const introRef = useRef(null);
  const allCategoriesRef = useRef(null);
  const serviceRefs = useRef([]);
  serviceRefs.current = [];


  const addToRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);

    
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2 }
    );
  
    
    gsap.fromTo(
      allCategoriesRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 }
    );
  
    
    serviceRefs.current.forEach((el) => {
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
      <p className="intro-text" ref={introRef}>
        Chers clients, <br />
        <br />
        Welcome to my world of investigations, where every mystery requires
        attentiveness, each case is unique, and every client is valued. <br />
        <br />I am pleased to offer you my services, honed by years of
        experience and based on the elegance of the mind and acuteness of
        observation. In my portfolio - a multitude of services, from solving the
        most intricate murders to investigating complex thefts and analyzing
        insurance frauds. I apply my unique methods and strategies to uncover
        even the most cunning crimes and provide you with the necessary clarity
        and solution. My services also extend to consultations on security
        assessment and psychological profiling, ensuring comprehensive
        protection and understanding of complex situations. Additionally, I
        offer educational programs, including master classes and seminars, where
        I share my knowledge and experience in detective work. <br />
        <br />
        Every case for me is not just a task, but an opportunity to restore
        justice, bring clarity, and provide peace of mind to my clients. I
        invite you to take advantage of my services and see for yourself the
        professionalism and thoroughness of my approach to each case. Your trust
        and satisfaction are my top priority. I guarantee confidentiality and a
        personalized approach to each client. Do not hesitate to contact me for
        a consultation or to discuss your case. Together, we will find the best
        solutions and strategies for your unique situation. Your problems are my
        work, and your peace of mind is my goal.
        <br />
        <br />
        Sincerely, <br />
        Hercule Poirot
      </p>
    <div ref={allCategoriesRef}>
    <AllCategories />
    </div>
     

      <div className="allServices">
        {dataService
          .filter((service) => {
            if (selectedCategory === "All services") return true;
            return selectedCategory === service.category;
          })
          .map((service) => (
            <div ref={addToRefs}>
            <Service key={service.id} service={service} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Services;
