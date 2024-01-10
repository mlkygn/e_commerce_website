import React from "react";

function SliderCard({ item }) {
  return (
    <div className="p-3">
      <div className="row">
        <div className="col-8 pt-5">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className="btn btn-secondary">Visit Collections</div>
        </div>
        <div className="col-4">
          <img src={item.cover} width="100%" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
