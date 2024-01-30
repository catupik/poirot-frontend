import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function AboutMe() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   gsap.from(".about-section", {
  //     scrollTrigger: {
  //       trigger: ".about-section",
  //       start: "top 20%", 
  //     },
  //     opacity: 0,
  //     y: 50,
  //     duration: 1
  //   });
  // }, []);
  return (
    <div className="about-container">
      <div className="about-section">
        <img src="/about/brussel.jpeg" alt="brussel" width="400px" />
        <p>
          I am originally from Belgium, and my career as a detective began in
          the Brussels police force. However, it was in England where I gained
          true fame, becoming a private investigator. My methods of work are
          distinguished by a special attention to details and psychology, as
          well as a striving for perfection and order, which undoubtedly helped
          me solve many complex cases. I am known for my unique manners and
          appearance: meticulously groomed mustaches, always in perfect
          condition, are my trademark.
        </p>
      </div>

      <div className="definder">
        <img
          src="/about/definder-PhotoRoom.png-PhotoRoom.png"
          width="500px"
          alt="definder"
        />
      </div>

      <div className="about-section reverse">
        <p>
          My analytical skills and keen observation have made me one of the most
          respected detectives. Each case I have undertaken has been unique and
          thrilling, showcasing my ability for logical reasoning and exceptional
          intellect. Some of my most famous cases include "Murder on the Orient
          Express," "Death on the Nile," and "The Mystery of End House."
          <br />
          <button className="btn near-picture" onClick={() => navigate("/cases")}>
            Cases
          </button>
        </p>
        <img src="/about/express.jpeg" alt="express" width="400px" />
      </div>

      <div className="definder">
        <img
          src="/about/definder-PhotoRoom.png-PhotoRoom.png"
          width="500px"
          alt="definder"
        />
      </div>

      <div className="about-section">
        <img src="/about/society.jpeg" alt="society" width="400px" />
        <p>
          Not merely a detective, but also a person of subtle intellect and
          broad perspective, I have always aspired not only to solve crimes but
          also to understand human nature. My adventures and investigative
          methods continue to inspire and captivate people around the world,
          remaining an eternal classic in the detective genre. Equally important
          in my work is the ability to interact with people from various strata
          of society. Thanks to my heightened sense of empathy and skill in
          listening, I often discover key clues in the most unexpected
          conversations and behaviors of suspects. This ability to see beyond
          the facades of everyday life allows me to uncover mysteries hidden
          from the ordinary gaze.
          <br />
          <button className="btn" onClick={() => navigate("/services")}>
            Services
          </button>
        </p>
      </div>

      <div className="definder">
        <img
          src="/about/definder-PhotoRoom.png-PhotoRoom.png"
          width="500px"
          alt="definder"
        />
      </div>

      <div className="about-section reverse">
        <p>
          Additionally, I am known for my love of travel. My investigations are
          not confined to the borders of a single country, allowing me to gain
          experience in a wide range of cultural contexts. From Europe to North
          Africa, my adventures are always enriched by local traditions and
          customs, adding depth and realism to my investigations. In conclusion,
          my detective stories are not only thrilling and full of intrigue but
          also carry deep moral and philosophical reflections. I believe that
          each investigation is not just a search for a criminal, but a journey
          into the very essence of the human spirit, a quest for a truth that
          often turns out to be more complex and ambiguous than it appears at
          first glance.
          <br />
          <button className="btn near-picture" onClick={() => navigate("/contact")}>
            Contact me
          </button>
        </p>
        <img src="/about/map.jpeg" alt="map" width="400px" />
      </div>
    </div>
  );
}

export default AboutMe;
