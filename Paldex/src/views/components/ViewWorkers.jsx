import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { SVGclose } from "../../assets/SVGclose";

export const ViewWorkers = ({ onClose, workers , onRemoveWorker}) => {
  const [suitabilities, setSuitabilities] = useState({
    Cooling: 0,
    Farming: 0,
    Gathering: 0,
    "Generating Electricity": 0,
    Handiwork: 0,
    Kindling: 0,
    Lumbering: 0,
    "Medicine Production": 0,
    Mining: 0,
    Planting: 0,
    Transporting: 0,
    Watering: 0,
  });

  useEffect(() => {
    addWorkerSuitabilities();
  }, [workers]);

  const addWorkerSuitabilities = () => {
    // Inicializa un nuevo objeto de idoneidades con todos los valores en 0
    let newSuitabilities = {
      Cooling: 0,
      Farming: 0,
      Gathering: 0,
      "Generating Electricity": 0,
      Handiwork: 0,
      Kindling: 0,
      Lumbering: 0,
      "Medicine Production": 0,
      Mining: 0,
      Planting: 0,
      Transporting: 0,
      Watering: 0,
    };

    // Itera sobre todos los trabajadores
    workers.forEach((worker) => {
      // Itera sobre la idoneidad de cada trabajador
      worker.suitability.forEach((suitability) => {
        if (newSuitabilities[suitability.type] !== undefined) {
          newSuitabilities[suitability.type] += suitability.level;
        }
      });
    });

    setSuitabilities(newSuitabilities); // Actualiza suitabilities con el nuevo objeto
  };

  return (
    <article className="viewCard">
      <ul className="viewCard__table">
        {Object.keys(suitabilities).map((suitability, index) => (
          <li className="viewCard__table-li" key={index}>
            <img
              src={`/images/suitability/${suitability.replace(
                /\s/g,
                "_"
              )}_Icon.webp`}
              alt={suitability.type}
            />
            {suitabilities[suitability]}
          </li>
        ))}
      </ul>
      <section className="viewCard__box">
        <h2 className="viewCard__title">Your Workers</h2>
        <section className="viewCard__dropedBy">
        {workers.map((worker, index) => (
      <Card 
        key={index} 
        pal={worker} 
        worker={true} 
        onViewWorker={true} 
        onRemoveWorker={() => onRemoveWorker(index)}
      />
    ))}
        </section>
      </section>
      <div className={`viewCard__background app`}>
        <button className="viewCard__close" onClick={onClose}>
          <SVGclose />
        </button>
      </div>
    </article>
  );
};
