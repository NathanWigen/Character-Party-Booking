import React from "react";
import "./Characters.css";
import characterData from "../../../Data/CharactersData";

export default function Characters() {
  return (
    <>
      {characterData.map((data, index) => (
        <div className="characters-container" key={index}>
          <img
            style={{ width: "300px", height: "300px" }}
            thumbnail
            src={data.src}
            alt={data.alt}
            className="characters-image"
          />
          <p className="characters-name">{data.name}</p>
        </div>
      ))}
    </>
  );
}
