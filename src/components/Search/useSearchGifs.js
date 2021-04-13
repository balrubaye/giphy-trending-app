import axios from "axios";
import React, { useState, useEffect } from "react";
//import axios from "axios";

const URL_SEARCH_GIFS = `${process.env.REACT_APP_GIPHY_URL}gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
export default function useSearchGifs() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (term) {
        console.log("useSearchGifs");
      axios
        .get(`${URL_SEARCH_GIFS}&q=${term}`)
        .then((resp) => setData(resp.data.data))
        .catch((err) => console.error(err));
    }
  }, [term]);

  return [data, term, setTerm];
}
