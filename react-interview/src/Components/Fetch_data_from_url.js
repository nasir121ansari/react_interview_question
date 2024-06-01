import React, { useState } from "react";
import axios from "axios";

const Fetch_data_from_url = () => {
  const [data, setData] = useState([]);
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  //   return (
  //     <div className="text-center">
  //       <ul>
  //         {data.map((res) => {
  //           return (
  //             <li key={res.id}>
  //               <h3>{res.title}</h3>
  //               <p>{res.id}</p>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );

  return (
    <div className="text-center">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res) => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.title}</td>
              <td>{res.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fetch_data_from_url;
