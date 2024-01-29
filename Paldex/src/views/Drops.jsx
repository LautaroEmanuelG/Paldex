import React, { useEffect, useState } from "react";
import dropPals from "../mock/dropPals.json";
import { Card } from "./components/Card";
import { SVGupward } from "../assets/SVGupward";
import { SVGsearch } from "../assets/SVGsearch";
import { ViewCard } from "./components/ViewCard";

export const Drops = () => {
  const [selectedDrop, setSelectedDrop] = useState(null);
  const handleCardClick = (drop) => {
    setSelectedDrop(drop);
  };

  const handleClose = () => {
    setSelectedDrop(null);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filteredDrops = dropPals.filter((drop) =>
    drop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        </nav>
        <article className="listPals">
          {filteredDrops.map((dropPal, index) => (
            <Card
              key={index}
              drop={dropPal}
              onClick={() => handleCardClick(dropPal)}
            />
          ))}
        </article>
      </section>
      {selectedDrop && <ViewCard drop={selectedDrop} onClose={handleClose} />}
    </>
  );
};
