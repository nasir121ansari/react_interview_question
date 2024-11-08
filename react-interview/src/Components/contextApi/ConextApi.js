import React, { useContext } from "react";
import { globalInfor } from "../../App";
 const ConextApi = () => {
  const { data, setData } = useContext(globalInfor);
  console.log("ConextApi", data);
  return (
    <div>
      ConextApi : {data}
      <button onClick={() => setData("Updated Value from Child Component")}>
        Update Context Value
      </button>
    </div>
  );
};

export default ConextApi;