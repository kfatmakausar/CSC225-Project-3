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
    <div>
      {consoles.map((console) => {
        return (
          <p key={console.id}>
            <button onClick={() => setSelectedConsole(console.id)}>
              {console.name}
            </button>
            {/* <img src={console.image} alt={console.name}></img> */}
          </p>
        );
      })}
    </div>
  );
}

export default Consoles;
