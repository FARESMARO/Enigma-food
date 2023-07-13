import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img src="path_to_image" alt="Card" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Card Title</h3>
        <p className="card-description">This is the card description.</p>
        <a href="#" className="card-button">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
