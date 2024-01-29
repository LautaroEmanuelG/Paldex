import React, { useEffect, useState } from "react";
import palsData from "../mock/pals.json";
import { SVGupward } from "../assets/SVGupward";
import { SVGsearch } from "../assets/SVGsearch";
import { Card } from "./components/Card";
import { SVGcamping } from "../assets/SVGcamping";
import { ViewWorkers } from "./components/ViewWorkers";

export const Workers = () => {
  const [selectedPal, setSelectedPal] = useState(null);
  const handleCardClick = (pal) => {
    setSelectedPal(pal);
  };

  const handleClose = () => {
    setSelectedPal(null);
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.pageYOffset > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const suitabilities = [
    "Cooling",
    "Farming",
    "Gathering",
    "Generating Electricity",
    "Handiwork",
    "Kindling",
    "Lumbering",
    "Medicine Production",
    "Mining",
    "Planting",
    "Transporting",
    "Watering",
    "",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedSuitability, setSelectedSuitability] = useState("");

  const filteredPals = palsData.filter(
    (pal) =>
      pal.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSuitability
        ? pal.suitability.some(
            (suitability) =>
              suitability.type.toLowerCase() ===
              selectedSuitability.toLowerCase()
          )
        : true)
  );

  return (
    <>
      <div className="campCountBtns">
        <button className="campCountBtn" onClick={scrollToTop}>
          <SVGcamping />
          <span className="campCount__number"></span>
        </button>
        {showButton && (
          <button className="campCountBtn" onClick={scrollToTop}>
            <SVGupward />
          </button>
        )}
      </div>
      <section className="list camp">
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
            {suitabilities.map((suitability) => (
              <span
                className={`type ${
                  suitability !== "" && suitability === selectedSuitability
                    ? "selected"
                    : ""
                }`}
                key={suitability}
                onClick={() => setSelectedSuitability(suitability)}
              >
                <img
                  src={`/images/suitability/${suitability.replace(
                    /\s/g,
                    "_"
                  )}_Icon.webp`}
                  alt={suitability}
                />
              </span>
            ))}
          </div>
        </nav>
        <article className="listPals">
          {filteredPals.map((pal, index) => (
            <Card key={index} pal={pal} onClick={() => handleCardClick(pal)} />
          ))}
        </article>
      </section>
      {/* {selectedPal && <ViewCard drop={selectedDrop} onClose={handleClose} />} */}
      {selectedPal && <ViewWorkers pal={selectedPal} onClose={handleClose} />}
    </>
  );
};
