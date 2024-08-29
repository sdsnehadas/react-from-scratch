import { useState, useEffect, useRef } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import RestaurentCategory from "./RestaurentCategory";

const Restaurentmenu = () => {
  const [restaurentInfo, setRestaurentInfo] = useState(null);
  const [restaurentMenu, setRestaurentMenu] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const prevShowIndex = useRef();

  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(()=>{
    prevShowIndex.current = showIndex;
  },[showIndex])

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setRestaurentInfo(json?.data);
    setRestaurentMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };

  if (restaurentInfo == null) {
    return <Shimmer></Shimmer>;
  }

  const { id, name, avgRating, cuisines, cloudinaryImageId } =
    restaurentInfo?.cards[2]?.card?.card?.info;
  const menuItems =
    restaurentInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center font-bold p-4 my-3">
        <h1 className="font-bold text-slate-500 hover:text-blue-600 text-3xl text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          {name}
        </h1>
        <h6>{avgRating} rating</h6>
        <h6>{cuisines.join(" , ")}</h6>
      </div>

      {restaurentMenu?.length > 0 && (
        <div>
          {restaurentMenu.map((menuItem, index) => (
            <RestaurentCategory
              data-testid="category"
              key={menuItem?.card.card.id}
              data={menuItem?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => {
                prevShowIndex.current === index
                  ? setShowIndex(null)
                  : setShowIndex(index);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurentmenu;
