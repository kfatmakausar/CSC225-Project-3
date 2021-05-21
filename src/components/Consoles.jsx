import React, { useEffect, useState } from "react";
import axios from "axios";
import Console from "./Console";

function Consoles() {
  const [consoles, setConsoles] = useState([]);
  const [selectedConsole, setSelectedConsole] = useState(null);

  useEffect(() => {
    //make an http request to get the consoles from the console api
    axios.get("http://csc225.mockable.io/consoles").then((response) => {
      setConsoles(response.data);
    });
  }, []);

  if (consoles.length === 0) {
    return <p>Loading!</p>;
  }

  if (!!selectedConsole) {
    return (
      <div>
        <Console id={selectedConsole} />
        <button onClick={() => setSelectedConsole(null)}>Back</button>
      </div>
    );
  }

  return (
    <div class="jumbotron mt-5">
      <h1 class="display-4 text-center">Console Catalog</h1>
      <p class="lead text-center">
        Browse throught our catalog and choose your favorite console!
      </p>
      <hr class="my-4" />
      {consoles.map((console) => {
        return (
          <div class="col d-flex justify-content-center">
            <div class="card w-50 my-3 d-flex d-flex justify-content-center p-2">
              <p key={console.id}>
                <img
                  src={console.image}
                  class="card-img-top"
                  alt={console.name}
                  style={{ height: "250px" }}
                ></img>
                <div class="card-body">
                  <h5 class="card-title text-center">{console.name}</h5>
                </div>
                <button
                  type="button"
                  class="btn btn-dark btn-lg btn-block"
                  onClick={() => setSelectedConsole(console.id)}
                >
                  Learn More
                </button>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Consoles;

// {consoles.map((console) => {
//     return (
//       <p key={console.id}>
//         <button class = "btn btn-primary" onClick={() => setSelectedConsole(console.id)}>
//           Learn More
//         </button>
//       </p>
// <img src={console.image} class="card-img-top" alt={console.name}>
// <div class="card-body">
// <h5 class="card-title">{console.name}</h5>
// );
//   })}
