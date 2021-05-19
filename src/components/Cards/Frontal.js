import React from "react";
import Back from "./Back";
import "./styles.css";

const Frontal = ({ itens }) => {
  return itens === "" ? (
    <p className="results-search">Pesquise algo!</p>
  ) : (
    <div>
      <section className="cards">
        {itens.albums.items.map((item) => (
          <Back item={item} key={item.id} />
        ))}
      </section>
    </div>
  );
};

export default Frontal;
