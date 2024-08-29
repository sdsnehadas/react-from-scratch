import React from "react";
import { ItemList } from "./ItemList";
import { useState } from "react";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p4 mx-auto my-5">
        <div
          className=" flex  justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="justify-items-end">⬇️</span>
        </div>
        {showItems && (
          <ItemList className="text-center" key={data.title} items={data.itemCards}></ItemList>
        )}
      </div>
    </div>
  );
};

export default RestaurentCategory;
