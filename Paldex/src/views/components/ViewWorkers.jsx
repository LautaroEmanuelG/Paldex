import React from "react";

export const ViewWorkers = ({pal}) => {
  return (
    <article className="viewCard">
      <img
        className="viewCard__img"
        src={`/images/pals/${pal.key}.png`}
        alt={pal.name}
      />
      <section className="viewCard__box">
        <h2 className="viewCard__title">{pal.name}</h2>
        <h4 className="viewCard__drops-title">Droped By</h4>
        <section className="viewCard__dropedBy">
          {droped.map((dropedBy, index) => (
            <Card key={index} pal={dropedBy} />
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
