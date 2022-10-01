import "../styling/LinkList.css";
import React, { useState } from "react";
import Embed from "./Embed";
import * as AWS from "aws-sdk";

function LinkList() {
  const [ListArr, SetListArr] = useState([
    { siteName: "Site 1", URL: "https://standforukraine.com/", linkID: 1 },
    { siteName: "Site 2", URL: "https://riseofukraine.com/", linkID: 2 },
    { siteName: "Site 3", URL: "https://supportukrainenow.org/", linkID: 3 },
  ]);
  const [CurrentLink, SetCurrentLink] = useState(ListArr[0].URL);

  const docClient = new AWS.DynamoDB.DocumentClient();

  const fetchData = (tableName) => {
    var params = {
      TableName: "linkle.to",
    };

    docClient.scan(params, function (err, data) {
      if (!err) {
        console.log(data);
      }
    });
  };

  console.log(fetchData("URLs"));

  // console.log(AWS.env.REACT_APP_GOOGLE_API_KEY);

  // const docClient = new AWS.DynamoDB.DocumentClient();

  // const fetchData = (tableName) => {
  //   var params = {
  //     TableName: linkle.to,
  //   };

  //   docClient.scan(params, function (err, data) {
  //     if (!err) {
  //       console.log(data);
  //     }
  //   });
  // };

  return (
    <div className="LinkList">
      <div className="LinkGallery">
        <h2>LinkList</h2>
        <ul className="siteLinks">
          {ListArr.map((link) => {
            return (
              <li key={link.linkID} className="siteLink">
                <button
                  onClick={() => {
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
