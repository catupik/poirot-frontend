import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "./data/dataCases";
import PoirotMap from "./PoirotMap";

function Cases() {
  const [cases, setCase] = useState(0);
  const { name, description, year, image } = data[cases];

  const introRef = useRef(null);
  const otherSectionsRefs = useRef([]);
  otherSectionsRefs.current = [];

  const imageRef = useRef();
  const descriptionRef = useRef();
  const addToRefs = (el) => {
    if (el && !otherSectionsRefs.current.includes(el)) {
      otherSectionsRefs.current.push(el);
    }
  };

  const previousCase = () => {
    setCase((prevCases) => (prevCases === 0 ? data.length - 1 : prevCases - 1));
  };

  const nextCase = () => {
    setCase((prevCases) => (prevCases === data.length - 1 ? 0 : prevCases + 1));
  };

  useEffect(() => {
    
    gsap.to(imageRef.current, {
      opacity: 0,
      x: -100,
      duration: 0.5, 
    });

    gsap.to(imageRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out" 
    });
  }, [cases]);
  
  useEffect(() => {
  
    gsap.registerPlugin(ScrollTrigger);
  
    if (introRef.current) {
      gsap.fromTo(
        introRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out", delay: 0.5 }
      );
    }
  
    otherSectionsRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
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
  
    if (descriptionRef.current) {
      gsap.fromTo(descriptionRef.current, { opacity: 0 }, { opacity: 1, duration: 2, ease: "power2.out" });
    }
  }, []);

  return (
    <div className="cases-container" ref={introRef}>
      <div className="intro-text">
        <p>
          Chers amis, <br />
          <br />
          Allow me to present to you a detailed overview of several of my most
          fascinating and mysterious cases. In my extensive practice, there have
          been astonishing events, and I have always aimed to uncover the most
          complex and enigmatic crimes. The stories I am about to share with you
          demonstrate that even in the most intricate and mysterious cases, the
          truth can remain hidden. However, my abilities are always ready to
          shed light on the most secretive mysteries.
        </p>

        <p>
          And now, mes amis, I invite you to explore this interactive map, a
          cartographic journal of my intriguing investigations. Each pinpoint on
          this map represents a unique case, a puzzle that I have unraveled in
          my pursuit of justice. From the quaint villages of England to the
          exotic locales of Egypt and beyond, my quest to solve the unsolvable
          has taken me across the globe. So, embark on this journey with me,
          explore each location, and discover the intricate details of these
          fascinating cases. Who knows, perhaps you may uncover some hidden
          truths of your own.
        </p>

        <PoirotMap />
      </div>

      <div className="definder" ref={addToRefs}>
        <img
          src="/about/definder-PhotoRoom.png-PhotoRoom.png"
          width="500px"
          alt="definder"
        />
      </div>

      <div className="case-image-set" ref={addToRefs}>
        <div className="intro-text">
          <p>
            Below, you will find a selection of some of my most intriguing
            cases. Each one is a testament to the complexities of human nature
            and the intricacies of crime. As you explore these cases, you will
            see how my methods of deduction and attention to detail have brought
            clarity to the most bewildering mysteries. I invite you to delve
            into these accounts, and perhaps you may uncover insights into the
            workings of a detective's mind.
          </p>
        </div>

        <div className="case">
          <img
            className="arrowbtn"
            onClick={previousCase}
            src="/cases/arrowleft.png"
            alt="btn"
          />
          <h3 className="case-title">
            {name} - {year}
          </h3>
          <img
            className="arrowbtn"
            onClick={nextCase}
            src="/cases/arrowright.png"
            alt="btn"
          />
        </div>
      </div>

      <img
        src={`/cases/${image}.jpeg`}
        alt="case"
        width="400"
        className="case-image"
        ref={imageRef}
      />

      <p className="case-description" ref={descriptionRef}>
        {description}
      </p>
    </div>
  );
}

export default Cases;
