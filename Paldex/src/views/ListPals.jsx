import React, { useState } from "react";
import palsData from "../mock/pals.json";
import { Card } from "./components/Card";
import { ViewCard } from "./components/ViewCard";
import { SVGsearch } from "../assets/SVGsearch";

export const ListPals = () => {
  const pals = palsData;
  const randomPal = pals[Math.floor(Math.random() * pals.length)];

  const [selectedPal, setSelectedPal] = useState(randomPal);

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
  
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPals = pals.filter(pal =>
    pal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="list">
        <nav className="list__nav">
          <div className="search">
          <input
              className="search__input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
        </nav>
        <div className="listPals">
          {filteredPals.map((pal) => (
            <Card key={pal.id} pal={pal} onClick={() => handleCardClick(pal)} />
          ))}
        </div>
      </section>
      {selectedPal && <ViewCard pal={selectedPal} onClose={handleClose} />}
    </>
  );
};
