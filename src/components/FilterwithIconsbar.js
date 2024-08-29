import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import CakeIcon from "@mui/icons-material/Cake";
import IcecreamIcon from "@mui/icons-material/Icecream";
import SetMealIcon from "@mui/icons-material/SetMeal";
import { ICONS_ARRAY } from "../utils/constants";
import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import Button from '@mui/material/Button';


const FilterwithIconsbar = () => {
  

    const onFilterClick = (content) =>{
      //setResList( resList.filter( res => res.info.cuisines.includes(content)))
    }

      return (
      <div className="filter-icons-row">

        {ICONS_ARRAY.map(item => {
           (<Button variant="contained" 
          onClick= {onFilterClick(item.label)}>{item.label}</Button>)
        })}
      </div>
    )
  }

//   return (<div className="filter-icons-row">
//       <Button variant="text"onClick={setResList( resList.filter( res => res.info.cuisines.includes("Bakery")))}
// >Bakery</Button>
//       {/* {ICONS_ARRAY.map((item) => {
//         const IconName = item.iconName;
//         console.log("item",item, IconName)
//         return <IconName key={item.label} />
//       })} */}
// {/* 
//       <Tooltip title="Bakery">
//         <IconButton
//          // onClick={setResList( resList.filter( res => res.info.cuisines.includes("Bakery")))}
//           size="large"
//           edge="end"
//           aria-haspopup="true"
//           color="inherit"
          
//         //   onClick={setResList(resList.filter((res)=> res.cuisines.includes("Bakery")))}
//          >
//           <BakeryDiningIcon/>
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Pizza">
//         <IconButton
//           size="large"
//           edge="end"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <LocalPizzaIcon />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Chinese">
//         <IconButton
//           size="large"
//           edge="end"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <RamenDiningIcon />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Cake">
//         <IconButton
//           size="large"
//           edge="end"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <CakeIcon />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Ice cream">
//         <IconButton
//           size="large"
//           edge="end"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <IcecreamIcon />
//         </IconButton>
//       </Tooltip>
//       <Tooltip title="Biriyani">
//         <IconButton
//           size="large"
//           edge="end"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <SetMealIcon />
//         </IconButton>
//       </Tooltip> */}
//     </div>
//   );
// };

export default FilterwithIconsbar;
