import { Fragment } from "react";

const MenuItem = (props) => {
  return (
    <Fragment >
      <div className="w-[800px] h-[100px] p-7 border-t-4 border-r-4 border-b-4 border-l-4 border-gray border-solid m-4">
        <h2>{props.info.name}</h2>
        <h4>Price RS: {props.info.price/100}</h4>
        <button className="">ADD TO CART</button>
        {/* <img className="w-[100px] h-[100px] justify-end" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.info.imageId}></img> */}
      </div>
    </Fragment>
  );
};

export default MenuItem;
