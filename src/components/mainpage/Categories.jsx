import React from "react";

function Categories() {
  const data = [
    {
      img: "./images/category/cat1.png",
      name: "Fashion",
    },
    {
      img: "./images/category/cat2.png",
      name: "Electronic",
    },
    {
      img: "./images/category/cat3.png",
      name: "Cars",
    },
    {
      img: "./images/category/cat4.png",
      name: "Home & Garden",
    },
    {
      img: "./images/category/cat5.png",
      name: "Gifts",
    },
    {
      img: "./images/category/cat6.png",
      name: "Music",
    },
    {
      img: "./images/category/cat7.png",
      name: "Health & Beauty",
    },
    {
      img: "./images/category/cat8.png",
      name: "Pets",
    },
    {
      img: "./images/category/cat9.png",
      name: "Baby Toys",
    },
    {
      img: "./images/category/cat10.png",
      name: "Groceries",
    },
    {
      img: "./images/category/cat11.png",
      name: "Books",
    },
  ];
  return (
    <>
      <div className="list-group category-list">
        {data.map((category, i) => {
          return (
            <a
              key={i}
              href="#"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <img src={category.img} alt="" />
              <span>{category.name}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
