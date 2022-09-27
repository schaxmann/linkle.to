import "../styling/LinkList.css";
import React, { useState, useEffect, useRef } from "react";
import Embed from "./Embed";
// import { useScrollPercentage } from "react-scroll-percentage";
// import IframeResizer from "iframe-resizer-react";

function LinkList() {
  //   const [height, setHeight] = useState(0);
  //   const [ref, percentage] = useScrollPercentage();
  //   const iframeRef = useRef(null);
  //   const [messageData, setMessageData] = useState("");

  //   const onResized = (data) => setMessageData(data);

  //   const onMessage = (data) => {
  //     setMessageData(data);
  //     iframeRef.current.sendMessage("Hello back from the parent page");
  //   };

  return (
    <div className="LinkList">
      <div className="LinkGallery">
        <h2>LinkList</h2>
      </div>
      <Embed />
    </div>
  );
}

export default LinkList;

// TODO Sort out overflow on 100% height
