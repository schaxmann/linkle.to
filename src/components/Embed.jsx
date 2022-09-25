import "../styling/Splash.css";
import React from "react";
import { useScrollPercentage } from "react-scroll-percentage";

function Embed() {
  const [ref, percentage] = useScrollPercentage();
  return (
    <div className="embed">
      <p> Scrolled {percentage}</p>
      <embed ref={ref} src="https://standforukraine.com/"></embed>
      {/* <embed src="https://riseofukraine.com/" width={1000} height={500}></embed>
      <embed
        src="https://supportukrainenow.org/"
        width={1000}
        height={500}
      ></embed> */}

      <iframe
        width="100%"
        height="100%"
        src="https://standforukraine.com/"
      ></iframe>
    </div>
  );
}

export default Embed;
