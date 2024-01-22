import { gsap } from 'gsap';
import { useEffect } from 'react';
import './style.css'

const Loader = ()=>{

    useEffect(() => {
        gsap.to("#moustache", {
            scale: 1.5,
            repeat: -1,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
          });
      }, []);

    return(
        <div class="loader-container">
  <div class="loader">
    <img id='moustache' src='/poirot/mousetach.png' alt='moustache' width='60'/>
  </div>
</div>
    )
}

export default Loader;