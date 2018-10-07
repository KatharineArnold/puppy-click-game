import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="col-md-3">
    <div onClick={() => props.click(props.id)} className="remove card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default ImageCard;
