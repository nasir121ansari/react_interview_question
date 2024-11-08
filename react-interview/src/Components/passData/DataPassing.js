import React, { useState } from "react";
import Children  from "./Children";

// passing data from parent to child
// export const DataPassing = () => {
//   const [data, setData] = useState("data coming from parent");
//   return (
//     <div>
//       DataPassing
//       <Children fromParent={data} />
//     </div>
//   );
// };

 const DataPassing = () => {
  const [data, setData] = useState();

  const parentFunction = (data) => {
    setData(data);
  };
  return (
    <div>
      <h1>Data coming from children: {data}</h1>
      <Children alert={parentFunction} />
    </div>
  );
};


export default DataPassing
