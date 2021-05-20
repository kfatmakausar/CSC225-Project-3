import React, { useEffect, useState } from "react";
import axios from "axios";

function Consoles() {
  const [consoles, setConsoles] = useState([]);
  const [selectedConsole, setSelectedConsole] = useState(null);

  useEffect(() => {
    //make an http request to get the consoles from the console api
    axios.get("http://csc225.mockable.io/consoles").then((response) => {
      setConsoles(response.data);
    });
  }, []);

  return (
    <div>
      {consoles.map((console) => {
        return (
          <p key={console.id}>
            <p>{console.name}</p>
            <img src={console.image} alt={console.name}></img>
          </p>
        );
      })}
    </div>
  );
}

export default Consoles;
