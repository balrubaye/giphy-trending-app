import React, { useState, useEffect } from "react";
import axios from "axios";

const URL_SEARCH = `${process.env.REACT_APP_GIPHY_URL}stickers/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

export default function useSearchStickers() {
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (term) {
      axios
        .get(`${URL_SEARCH}&q=${term}`)
        .then((response) => setData(response.data.data))
        .catch( err => console.error(err))
    }
  }, [term]);

  return [data, term, setTerm];

}
