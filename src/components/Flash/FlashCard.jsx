import React from "react";

function FlashCard({ item }) {
  return (
    <>
      <div className="card m-3">
        <img src={item.cover} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
        </div>
        <div className="card-footer">
          <strong className="text-body-secondary">{item.price}</strong>
        </div>
      </div>
    </>
  );
}

export default FlashCard;
