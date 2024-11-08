import React, { useState } from "react";

// parent to child
// export const Children = (props) => {
//   console.log(props.fromParent);
//   const [data, setData] = useState("data coming from children");
//   return (
//     <div>
//       <h1>Children</h1>
//       <h2>{props.fromParent}</h2>
//     </div>
//   );
// };

// children to parent
const Children = (props) => {
  const data = "coming from children";
  return (
    <div>
      <button className="btn  btn-danger" onClick={() => props.alert(data)}>
        Submit
      </button>
    </div>
  );
};

export default Children
