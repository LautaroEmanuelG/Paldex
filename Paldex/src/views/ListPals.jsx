import React, { useState } from "react";
import pals from "../mock/pals.json";
import { Card } from "./components/Card";
import { ViewCard } from "./components/ViewCard";

export const ListPals = () => {
  const { pals } = pals;
  const [selectedPal, setSelectedPal] = useState(null)
  return (
    <>
      <header className="header">
        <img src="" alt="" />
        <h1>Paldex</h1>
      </header>
      <main>
        <div className="search">
          <input type="text" />
          <button className="search__btn">🔍</button>
        </div>
        <div className="listPals">
          <div className="listPals__cards">
            {pals.map((pal) => (
              <Card
                key={pal.key}
                pal={pal}
                onClick={() => setSelectedPal(pal)}
              />
            ))}
          </div>
          {selectedPal && <ViewCard pal={selectedPal} />}
        </div>
      </main>
    </>
  );
};
