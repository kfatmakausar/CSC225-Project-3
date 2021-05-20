import React, { useEffect, useState } from "react";
import axios from "axios";

function Console(props) {
  const { id } = props;
  const [console, setConsole] = useState(null);

  useEffect(() => {
    axios.get("http://csc225.mockable.io/consoles/" + id).then((response) => {
      setConsole(response.data);
    });
  }, []);

  if (!console) {
    return <p>Loading Console Id {id}</p>;
  }

  return (
    <p>
      <img src={console.image} alt={console.name}></img>
      <p>{console.name}</p>
      <p>{console.price}</p>
      <p>{console.country}</p>
      <p>{console.releaseYear}</p>
    </p>
  );
}

export default Console;
