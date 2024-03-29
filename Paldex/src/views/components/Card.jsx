import React from "react";
import { SVGclose } from "../../assets/SVGclose";

export const Card = ({
  pal,
  onClick,
  drop,
  worker,
  onViewWorker,
  onRemoveWorker,
}) => {
  if (pal) {
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
        {worker && (
          <div className="card__suitabilities">
            {pal.suitability.map((suitability) => (
              <span key={suitability.type} className={`card__suitability`}>
                <p>{suitability.level}</p>
                <img
                  src={`/images/suitability/${suitability.type.replace(
                    /\s/g,
                    "_"
                  )}_Icon.webp`}
                  alt={suitability.type}
                />
              </span>
            ))}
          </div>
        )}
        {onViewWorker && (
          <button className="removeWorker" onClick={onRemoveWorker}>
            <SVGclose />
          </button>
        )}
      </div>
    );
  } else if (drop) {
    return (
      <div className="card" onClick={onClick}>
        <img
          className="card__img"
          src={`/images/drops/${drop.name.replace(/\s/g, "_")}_icon.webp`}
          alt={drop.name}
        />
        <h2 className="card__title">{drop.name}</h2>
      </div>
    );
  }
};
