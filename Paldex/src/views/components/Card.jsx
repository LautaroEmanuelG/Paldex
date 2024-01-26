import React from "react";

export const Card = ({ pal, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img className="card__img" src={pal.image} alt={pal.name} />
      <h3 className="card__number">N° {pal.key}</h3>
      <h2 className="card__title">{pal.name}</h2>
      <div className="card__types">
        {pal.types.map((type) => (
          <span key={type} className={`card__type ${type}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
