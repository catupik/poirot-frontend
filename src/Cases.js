import { useState } from "react";
import data from "./data/dataCases";
import PoirotMap from "./PoirotMap";

function Cases() {
  const [cases, setCase] = useState(0);
  const { name, description, year, image } = data[cases];

  const previousCase = () => {
    setCase((cases) => {
      cases--;

      if (cases < 0) {
        return data.length - 1;
      }
      return cases;
    });
  };

  const nextCase = () => {
    setCase((cases) => {
      cases++;
      if (cases > data.length - 1) {
        cases = 0;
      }
      return cases;
    });
  };

  return (
    <div className="cases-container">
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

      <div className="definder">
        <img
          src="/about/definder-PhotoRoom.png-PhotoRoom.png"
          width="500px"
          alt="definder"
        />
      </div>

      <div className="case-image-set">
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
      />

      <p className="case-description">{description}</p>
    </div>
  );
}

export default Cases;
