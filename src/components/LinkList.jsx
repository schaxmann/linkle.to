import "../styling/LinkList.css";
import React, { useState, useEffect, useRef } from "react";
import Embed from "./Embed";
import { Link, useNavigate } from "react-router-dom";
// import { useScrollPercentage } from "react-scroll-percentage";
// import IframeResizer from "iframe-resizer-react";

function LinkList() {
  const [ListArr, SetListArr] = useState([
    { siteName: "Site 1", URL: "https://standforukraine.com/", linkID: 1 },
    { siteName: "Site 2", URL: "https://riseofukraine.com/", linkID: 2 },
    { siteName: "Site 3", URL: "https://supportukrainenow.org/", linkID: 3 },
  ]);
  const [CurrentLink, SetCurrentLink] = useState(ListArr[0].URL);
  const navigate = useNavigate();

  return (
    <div className="LinkList">
      <div className="LinkGallery">
        <h2>LinkList</h2>
        <ul className="siteLinks">
          {ListArr.map((link) => {
            return (
              <li key={link.linkID} className="siteLink">
                <button
                  onClick={(event) => {
                    console.log(link.URL);
                    SetCurrentLink(link.URL);
                  }}
                >
                  {link.siteName}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <Embed CurrentLink={CurrentLink} />
    </div>
  );
}

export default LinkList;

// TODO Sort out overflow on 100% height

{
  /* <embed ref={ref} src="https://standforukraine.com/"></embed> */
}
{
  /* <embed src="https://riseofukraine.com/" width={1000} height={500}></embed> */
}
<embed src="https://supportukrainenow.org/"></embed>;
