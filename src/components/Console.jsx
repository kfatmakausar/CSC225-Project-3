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
    return (
      <div class="d-flex justify-content-center mt-5">
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div class="col d-flex justify-content-center">
      <div class="card w-50 d-flex p-2 mt-5">
        <img src={console.image} class="card-img-top" alt={console.name}></img>
        <div class="card-body">
          <h4 class="card-title">{console.name}</h4>
          <p>Price: ${console.price}</p>
          <p>Country: {console.country}</p>
          <p>Year of Release: {console.releaseYear}</p>
          <button type="button" class="btn btn-danger btn-lg btn-block">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Console;
