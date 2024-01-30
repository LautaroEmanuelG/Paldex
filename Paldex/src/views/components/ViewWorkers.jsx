import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { SVGclose } from "../../assets/SVGclose";

export const ViewWorkers = ({ pal, onClose, workers }) => {
    const [workerSuitabilities , setWorkerSuitabilities] = useState([]);

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

      useEffect(() => {
        addWorkerSuitabilities();
      }, []);
      
      const addWorkerSuitabilities = () => {
        for (let i = 0; i < pal.suitabilities.length; i++) {
          workerSuitabilities.push(pal.suitabilities[i]);
        }
        setWorkerSuitabilities(workerSuitabilities);
      }

  return (
    <article className="viewCard">
      <img
        className="viewCard__img"
        src={`/images/pals/${pal.key}.png`}
        alt={pal.name}
      />
      <table>
        <tr>
            {suitabilities.map((suitability, index) => (
                <th key={index}>{suitability}</th>
            ))}
        </tr>
      </table>
      <section className="viewCard__box">
        <h2 className="viewCard__title">Your Workers</h2>
        <h4 className="viewCard__drops-title">...</h4>
        <section className="viewCard__dropedBy">
          {workers.map((worker, index) => (
            <Card key={index} pal={worker} worker={true} />
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
