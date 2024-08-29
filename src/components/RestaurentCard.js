import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import LinesEllipsis from "react-lines-ellipsis";

const RestaurantCard = (props) => {
  return (
    <div className="flex m-4 p-4 w-[300px] h-[500px] rounded-3xl hover:scale-90 shadow-transparent">
      <Card>
        <CardMedia
          className="h-[250px]"
          component="img"
          height="194"
          image={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            props.info.cloudinaryImageId
          }
          alt="Paella dish"
        />
        <CardContent>
        {props?.info?.aggregatedDiscountInfoV3?.header && <div className="text-center bottom-5 w-full bg-gray-100">
          <h2 className="text-gray-500 text-xl font-bold border-gray-100">{props?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {props?.info?.aggregatedDiscountInfoV3?.subHeader}</h2>
        </div>}
          <LinesEllipsis
            text={props.info.name}
            maxLine="1"
            className="font-bold text-lg text-pretty text-black"
            ellipsis="..."
            trimRight
            basedOn="letters"
          ></LinesEllipsis>
          <Typography
            className="font-bold text-black"
            variant="h7"
            color="text.secondary"
          >
            ⭐ {props.info.avgRating} : {props.info.sla.slaString}
          </Typography>
          <br></br>
          <Typography variant="body3" color="text.secondary">
            {(props?.info?.cuisines).join(" , ")}
          </Typography>
          <br></br>
          <Typography variant="body3" color="text.secondary">
            {props?.info?.areaName}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white text-lg rounded-md p-2 m-2">
          Top rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
