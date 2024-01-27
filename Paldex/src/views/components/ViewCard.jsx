import React from "react";

export const ViewCard = ({ pal }) => {
  return (
    <article className="viewCard">
      <img className="viewCard__img" src={pal.image} alt={pal.name} />
      <section className="viewCard__box">
        <h3 className="viewCard__number">N° {pal.key}</h3>
        <h2 className="viewCard__title">{pal.name}</h2>
        <div className="viewCard__types">
          {pal.types.map((type) => (
            <p key={type} className={`viewCard__type ${type}`}>
              {type}
            </p>
          ))}
        </div>
        <h4 className="viewCard__entry">Paldex Entry</h4>
        <span className="viewCard__entry-text">{pal.description}</span>
        <h4 className="viewCard__suitability-title">Suitability</h4>
        <section className="viewCard__suitability">
          {pal.suitability.map((suitability) => (
            <div key={suitability} className="viewCard__suitability-box">
              <span className="viewCard__suitability-icon">🌞</span>
              <span className="viewCard__suitability-type">
                {suitability.type}:{" "}
              </span>
              <span className="viewCard__suitability-level">
                {suitability.level}
              </span>
            </div>
          ))}
        </section>
        <h4 className="viewCard__drops-title">Drops</h4>
        <section className="viewCard__drops">
          {pal.drops.map((drop) => (
            <div key={drop} className="viewCard__drops-text">
              <span className="viewCard__drops-icon">🌞</span>
              <span className="viewCard__drops-item">{drop}</span>
            </div>
          ))}
        </section>
        <h4 className="viewCard__aura-title">Aura</h4>
        <section className="viewCard__aura">
          <h5 className="viewCard__aura-name">{pal.aura.name}: </h5>
          <span className="viewCard__aura-description">
            {pal.aura.description}
          </span>
        </section>
      </section>
      <div className={`viewCard__background ${pal.types[0]}`}></div>
    </article>
  );
};
