import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) =>{
    dispatch(addItem(item))
  }

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className=" flex p-4 m-2 border-b-2 border-gray-200"
          >
            <img src={item.card.info.imageId? CDN_URL + item.card.info.imageId : "https://silverhillsbakery.ca/wp-content/uploads/2019/02/SHB_Canada-FoodGuide_1200x800_BLOG-1200x800-c-default.jpg"} className="w-36 float-start h-36"></img>
            <div className="m-2 p-2">
            <span className="font-bold text-black">{item.card.info.name}</span>
            <div>
              💰{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <p className="text-sm  m-2 p2 w-auto">{item.card.info.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-96" onClick={()=>handleAddItem(item)}>ADD + </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
