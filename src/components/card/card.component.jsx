import React from "react";
import "./card.styles.scss";

const Card = (props) => (
  <div className="card">
    <h2>{props.title}</h2>
    <h3 className={`cases-today ${props.recovered ? "recovered" : null}`}>
      +{props.today}
    </h3>
    <h4 className="cases-total">{props.total}</h4>
  </div>
);

export default Card;
