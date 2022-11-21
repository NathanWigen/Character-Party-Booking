import React from 'react'
import './Characters.css'
import characterData from '../../../Data/CharactersData';

export default function Characters(){
  return (
    <>
      <>
        {characterData.map((data, index) => (
          <div md={4} key={index}>
              <img
                style={{ width: "300px", height: "300px" }}
                thumbnail
                src={data.src}
              />
            </div>
        ))}
      </>
    </>
  );
}
