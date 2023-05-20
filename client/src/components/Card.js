import React, { useState, useEffect } from "react";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Card.scss";

export const Card = ({ data, style }) => {
  const [expanded, setExpanded] = useState(false);
  let newContent = data.content;
  const isBiggerThanLength = data.content.length > 50;
  if (data.content.length > 50) {
    newContent = data.content.slice(0, 1000) + "...";
  }
  const handleExpanded = () => {
    setExpanded((prev) => !prev);
  };
  console.log(data, expanded, isBiggerThanLength);

  return (
    <div className="card" style={{ height: expanded ? "100%" : "330px" }}>
      <div className="card-header">
        <h2 className="content-title">{data.name}</h2>
        <h2 className="author-name">{data.name}</h2>
      </div>
      <div
        className="card-body"
        style={{ height: expanded ? "100%" : "250px" }}
      >
        <p className="content-body">{expanded ? data.content : newContent}</p>
        {isBiggerThanLength && (
          <button className="styled-button" onClick={handleExpanded}>
            {!expanded ? (
              <>
                Devamını Oku
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{ marginLeft: "2px" }}
                />
              </>
            ) : (
              <>
                Yukarı
                <FontAwesomeIcon
                  icon={faArrowUp}
                  style={{ marginLeft: "2px" }}
                />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
