import React from "react";
import dropPals from "../mock/dropPals.json";
import { Card } from "./components/Card";

export const Drops = () => {
  return (
    <>
      <section className="list">
        <article className="listPals">
          {dropPals.map((dropPal, index) => (
            <Card key={index} drop={dropPal} />
          ))}
        </article>
      </section>
    </>
  );
};
