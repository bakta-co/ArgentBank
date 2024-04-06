import React from "react";

export default function Card({ imageUrl, title, description }) {
    return (
      <div className="feature-item ">
        <img className="feature-icon" src={imageUrl} alt={title} width={100} height={100} />
        {title && <h2 className="feature-item.title">{title}</h2>}
        <div className="DescriptionCard">{description}</div>
      </div>
    );
  }