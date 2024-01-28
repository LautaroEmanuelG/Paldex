import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import palsData from "../mock/pals.json";
import { Card } from "./components/Card";
import { ViewCard } from "./components/ViewCard";
import { SVGsearch } from "../assets/SVGsearch";
import { SVGupward } from "../assets/SVGupward";

export const ListPals = () => {
  const pals = palsData;
  const randomPal = pals[Math.floor(Math.random() * pals.length)];

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1024px)' });

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
    "",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedType, setSelectedType] = useState("");

  const filteredPals = pals.filter(
    (pal) =>
      pal.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType ? pal.types.includes(selectedType.toLowerCase()) : true)
  );

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setSelectedPal(randomPal);
    }
  }, [isDesktopOrLaptop]);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.pageYOffset > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <button className="returnToTop" onClick={scrollToTop}>
          <SVGupward />
        </button>
      )}
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
              <span
                className="type"
                key={type}
                onClick={() => setSelectedType(type)}
              >
                <img src={`/images/elements/${type}_icon_mini.webp`} alt="" />
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
