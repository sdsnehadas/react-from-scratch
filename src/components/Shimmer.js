import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Shimmer = () => {
  const [showShimmer, setShowShimmer] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowShimmer(false), 2000);
  }, []);

  const emptyObjectList = [{}, {}, {}, {}, {}, {}];

  return (
    <div className="flex flex-wrap">
      {showShimmer &&
        emptyObjectList.map((obj, i) => (
          <div
            key={i}
            className=" animate-pulse flex m-4 p-4 w-[300px] h-[500px] rounded-lg hover:scale-110 bg-blue-100"
          >
            <Card>
              <CardContent className="font-bold py-4 text-lg"></CardContent>
            </Card>
          </div>
        ))}
      {!showShimmer && (
        <div className="border-solid p-4 m-2 border-black flex flex-col justify-between">
          <h4>
            UNFORTUNATELY NO DATA IS AVAILABLE FOR THIS COMBINATION OF FILTERS
          </h4>
          <img
            className="w-56 h-56 flex-nowrap"
            src="https://www.shutterstock.com/shutterstock/photos/141454867/display_1500/stock-photo-uh-oh-sign-141454867.jpg"
          ></img>
        </div>
      )}
    </div>
  );
};
export default Shimmer;
