import "../styling/Embed.css";
import React, { useState, useEffect, useRef } from "react";
import { useScrollPercentage } from "react-scroll-percentage";
import IframeResizer from "iframe-resizer-react";

function Embed() {
  const [height, setHeight] = useState(0);
  const [ref, percentage] = useScrollPercentage();
  const iframeRef = useRef(null);
  const [messageData, setMessageData] = useState("");

  const onResized = (data) => setMessageData(data);

  const onMessage = (data) => {
    setMessageData(data);
    iframeRef.current.sendMessage("Hello back from the parent page");
  };

  return (
    <div className="embed">
      <p> Scrolled {percentage}</p>
      {/* <embed ref={ref} src="https://standforukraine.com/"></embed> */}
      {/* <embed src="https://riseofukraine.com/" width={1000} height={500}></embed> */}
      <embed
        src="https://supportukrainenow.org/"
        width={"50%"}
        height={"100%"}
      ></embed>

      {/* <IframeResizer
        forwardRef={iframeRef}
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        onMessage={onMessage}
        onResized={onResized}
        src="https://standforukraine.com/"
        style={{ width: "1px", minWidth: "100%" }}
      /> */}

      {/* <iframe
        width="100%"
        height="100%"
        src="https://standforukraine.com/"
      ></iframe> */}
    </div>
  );
}

export default Embed;
