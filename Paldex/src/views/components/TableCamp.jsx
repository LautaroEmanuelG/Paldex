import React, { useState } from "react";
import { SVGsearch } from "../../assets/SVGsearch";

export const TableCamp = ({ pals }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedType, setSelectedType] = useState("");

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

  const filteredPals = pals.filter(
    (pal) =>
      pal.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType ? pal.types.includes(selectedType.toLowerCase()) : true)
  );

  return (
    <>
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
              className={`type ${
                type !== "" && type === selectedType ? "selected" : ""
              }`}
              key={type}
              onClick={() => setSelectedType(type)}
            >
              <img src={`/images/elements/${type}_icon_mini.webp`} alt={type} />
            </span>
          ))}
        </div>
      </nav>
      <table className="listCamp">
        <tr>
          <th className="listCamp__element"></th>
          <th className="listCamp__element">Name</th>
          <th className="listCamp__element">Types</th>
          <th className="listCamp__element">Cooling</th>
          <th className="listCamp__element">Farming</th>
          <th className="listCamp__element">Gathering</th>
          <th className="listCamp__element">Gen. Electricity</th>
          <th className="listCamp__element">Handiwork</th>
          <th className="listCamp__element">Kindling</th>
          <th className="listCamp__element">Lumbering</th>
          <th className="listCamp__element">Medicine Prod.</th>
          <th className="listCamp__element">Mining</th>
          <th className="listCamp__element">Planting</th>
          <th className="listCamp__element">Transporting</th>
          <th className="listCamp__element">Watering</th>
        </tr>
        {filteredPals.map((pal) => (
          <tr>
            <td className="listCamp__element">
              <img src={pal.image} alt={pal.name} />
            </td>
            <td className="listCamp__element">{pal.name}</td>
            <td className="listCamp__element">
              {pal.types.map((type) => (
                <span key={type} className={`card__type ${type}`}>
                  {type}
                </span>
              ))}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Cooling")?.level || "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Farming")?.level || "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Gathering")?.level ||
                "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Generating_Electricity")
                ?.level || "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Handiwork")?.level ||
                "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Kindling")?.level || "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Lumbering")?.level ||
                "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Medicine_Production")
                ?.level || "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Mining")?.level || "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Planting")?.level || "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Transporting")?.level ||
                "-"}
            </td>
            <td className="listCamp__element">
              {pal.suitability.find((s) => s.type === "Watering")?.level || "-"}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
