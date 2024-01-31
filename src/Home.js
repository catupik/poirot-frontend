import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const scrollSectionsRef = useRef([]);
  scrollSectionsRef.current = [];

  const addToRefs = (el) => {
    if (el && !scrollSectionsRef.current.includes(el)) {
      scrollSectionsRef.current.push(el);
    }
  };


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    
    
    
    gsap.fromTo(imageRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 2 });
    gsap.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2 });

   
    scrollSectionsRef.current.forEach((el) => {
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
    <div className="about-container">
      <div className="about-section">
        <div className="poirot">
          <img ref={imageRef} src="/poirot/poirot.jpeg" alt="poirot" />
        </div>

        <p  ref={textRef}>
          Bonjour, mes chers amis et collègues respectés,
          <br />
          <br />
          My name is Hercule Poirot, and I have the honor to introduce myself to
          you as your servant in the world of detective mystery. In my career,
          which began in a charming Belgian town and has taken me to the most
          diverse corners of the world, I have encountered unimaginable crimes
          and mysteries, the resolution of which required all my wit, intuition,
          and, of course, my famous "little grey cells". My life is a continuous
          chain of intriguing investigations, each of which is unique and
          fascinating in its own way. I believe that every crime, like a complex
          mechanism, requires careful analysis and attention to detail in order
          to uncover its secrets. I am constantly in search of the truth, even
          if it is hidden behind a complex labyrinth of deception and lies. My
          creed is to never give up in the face of difficulties and always to
          trust my intuition and understanding of human nature. In each of us
          lies the key to solving the most intricate cases. And although my
          methods may sometimes seem unusual, the results of my investigations
          speak for themselves.
          <br />
          With respect and hope for your trust,
          <br />
          Hercule Poirot
        </p>
      </div>

      <div className="whyMe" >
        <h2 ref={addToRefs}>Why Me?</h2>
        <div className="allWhy">
          <div  className="reasonWhy" ref={addToRefs}>
            <div className="reason" >
              <img
                className="icon-mousetach"
                src="/poirot/mousetach.png"
                alt="icon"
                width="50"
                height="50"
              />
              <h3>Unmatched Experience and Skill:</h3>
            </div>
            <p>
              My years of experience and reputation speak for themselves. Since
              my first case in "The Mystery of Styles," I have demonstrated an
              amazing ability to unravel the most complicated and incredible
              crimes. My investigative method, based on the use of "little grey
              cells", allows me to see what is hidden from the eyes of others.
            </p>
          </div>

          <div className="reasonWhy" ref={addToRefs}>
            <div className="reason">
              <img
                className="icon-mousetach"
                src="/poirot/mousetach.png"
                alt="icon"
                width="50"
                height="50"
              />
              <h3>Attention to Details:</h3>
            </div>
            <p>
              I, Hercule Poirot, am known for my attention to the smallest
              details. Not a single clue goes unnoticed, not a single fact is
              ignored. This is a key element of my success in solving the most
              mysterious crimes.
            </p>
          </div>

          <div className="reasonWhy" ref={addToRefs}>
            <div className="reason">
              <img
                className="icon-mousetach"
                src="/poirot/mousetach.png"
                alt="icon"
                width="50"
                height="50"
              />
              <h3>Unwavering Honesty and Justice:</h3>
            </div>
            <p>
              My principles of honesty and justice are the foundation of my
              work. You can be assured that I always act in the interest of
              truth and justice.
            </p>
          </div>

          <div className="reasonWhy" ref={addToRefs}>
            <div className="reason">
              <img
                className="icon-mousetach"
                src="/poirot/mousetach.png"
                alt="icon"
                width="50"
                height="50"
              />
              <h3>International Experience:</h3>
            </div>
            <p>
              My investigations know no borders. I have worked around the world,
              from the deserts of Egypt to the snowy peaks of the Alps,
              enriching my knowledge and experience in various cultures and
              conditions.
            </p>
          </div>

          <div className="reasonWhy" ref={addToRefs}>
            <div className="reason">
              <img
                className="icon-mousetach"
                src="/poirot/mousetach.png"
                alt="icon"
                width="50"
                height="50"
              />
              <h3>Unique Approach to Investigations:</h3>
            </div>
            <p>
              My approach to investigations is unique and effective. I use a
              combination of observation, psychological analysis, and logical
              thinking to solve even the most complex cases.
            </p>
          </div>

          <div className="reasonWhy" ref={addToRefs}>
            <div className="reason">
              <img
                className="icon-mousetach"
                src="/poirot/mousetach.png"
                alt="icon"
                width="50"
                height="50"
              />
              <h3>Legendary Achievements:</h3>
            </div>
            <p>
              My investigations have become legendary. Cases such as "Murder on
              the Orient Express" and "Death on the Nile" have demonstrated my
              unparalleled talent and continue to amaze detective genre fans
              around the world.
            </p>
          </div>

          <div ref={addToRefs}>
            <h3 className="conclusion">
              By choosing me, Hercule Poirot, you choose a detective with an
              impeccable reputation and unsurpassed mastery. Together, we can
              unravel any mystery and achieve justice. Trust me, and I promise
              the truth will be found.
            </h3>
          </div>
        </div>
      </div>
      <div className="contactme" ref={addToRefs}>
      <button className="btn" onClick={() => navigate("/contact")}>
            Contact me
          </button>
          </div>

          <div className="social" ref={addToRefs}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Facebook"
          >
            <img
              className="icon-mousetach socialicon"
              src="/contact/detective.png"
              alt="facebook"
              width="50px"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Instagram"
          >
            <img
              className="icon-mousetach socialicon"
              src="/contact/instagram.png"
              alt="instagram"
              width="50px"
            />
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Telegram"
          >
            <img
              className="icon-mousetach socialicon"
              src="/contact/telegram.png"
              alt="telegram"
              width="50px"
            />
          </a>
          <a
            href="mailto:poirot@detective.com"
            data-tooltip="puaro@detective.com"
          >
            <img
              className="icon-mousetach socialicon"
              src="/contact/email.png"
              alt="email"
              width="50px"
            />
          </a>
        </div>
    </div>
  );
}

export default Home;
