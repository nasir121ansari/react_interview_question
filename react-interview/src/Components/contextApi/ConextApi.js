import React, { useContext } from "react";
import { globalInfor } from "../../App";
export const ConextApi = () => {
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
