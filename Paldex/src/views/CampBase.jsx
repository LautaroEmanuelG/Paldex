import React from "react";
import palsData from "../mock/pals.json";
import { TableCamp } from "./components/TableCamp";

export const CampBase = () => {
  return (
    <article className="camp">
      <section className="camping">
        <h2 className="camp__title">Camp Base</h2>
        <p className="camp__text">
          This is the place where you can find the pals you have caught and the
          pals you have in your camp.
        </p>
      </section>
      <section className="listCampBase">
        <TableCamp pals={palsData} />
      </section>
    </article>
  );
};
