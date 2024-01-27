import React, { useState } from "react";
import palsData from "../mock/pals.json";
import { Card } from "./components/Card";
import { ViewCard } from "./components/ViewCard";
import { SVGsearch } from "../assets/SVGsearch";

export const ListPals = () => {
  const pals = palsData;
  const randomPal = pals[Math.floor(Math.random() * pals.length)];

  const [selectedPal, setSelectedPal] = useState(null);

  const handleCardClick = (pal) => {
    setSelectedPal(pal);
  };

  const handleClose = () => {
    setSelectedPal(null);
  };

  const types = [
    "Neutral",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Dark",
    "Ground",
    "Dragon",
  ];

  return (
    <>
      <section className="list">
        <nav className="list__nav">
          <div className="search">
            <input className="search__input" type="text" />
            <button className="search__btn">
              <SVGsearch />
            </button>
          </div>
          <div className="types">
            {types.map((type) => (
              <span className="type" key={type}>
                <img
                  src={`./src/assets/images/elements/${type}_icon_mini.webp`}
                  alt=""
                />
              </span>
            ))}
          </div>
          {/* <span className="type">
              <img
                className="type"
                src={`./src/assets/images/elements/${types[i]}_icon_mini.webp`}
                alt=""
              />
            </span>
            <span className="type icon__water">agua</span>
            <span className="type icon__fire">tierra</span>
            <span className="type icon__neutral">aire</span>
            <span className="type icon__grass">planta</span>
            <span className="type ">veneno</span> */}
          {/* </div> */}
        </nav>
        <div className="listPals">
          {pals.map((pal) => (
            <Card key={pal.id} pal={pal} onClick={() => handleCardClick(pal)} />
            // onClick={() => setSelectedPal(pal)}
          ))}
        </div>
      </section>
      {selectedPal && <ViewCard pal={selectedPal} onClose={handleClose} />}
    </>
  );
};
