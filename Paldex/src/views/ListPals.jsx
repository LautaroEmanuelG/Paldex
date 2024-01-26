import React, { useState } from "react";
import palsData from "../mock/pals.json";
import { Card } from "./components/Card";
import { ViewCard } from "./components/ViewCard";
import { SVGsearch } from "../assets/SVGsearch";

export const ListPals = () => {
  const pals = palsData;
  const randomPal = pals[Math.floor(Math.random() * pals.length)];
  const [selectedPal, setSelectedPal] = useState(randomPal);
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
            <span className="type">fuego</span>
            <span className="type">agua</span>
            <span className="type">tierra</span>
            <span className="type">aire</span>
            <span className="type">planta</span>
            <span className="type">veneno</span>
          </div>
        </nav>
        <div className="listPals">
          {pals.map((pal) => (
            <Card key={pal.id} pal={pal} onClick={() => setSelectedPal(pal)} />
          ))}
        </div>
      </section>
      {selectedPal && <ViewCard pal={selectedPal} />}
    </>
  );
};
