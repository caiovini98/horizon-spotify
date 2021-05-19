import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../../components/Search";
import Frontal from "../../components/Cards/Frontal";
import Footer from "../../components/Footer";

const App = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, [query]);

  const fetchItems = async () => {
    const { token } = JSON.parse(localStorage.getItem("token"));
    const results = await axios(
      `https://api.spotify.com/v1/search?q=${query}&type=album&limit=10`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    setItems(results.data);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <Search getQuery={(q) => setQuery(q)} />
      <Frontal itens={items} isLoading={isLoading} />
      <Footer />
    </div>
  );
};

export default App;
