import React from "react";
import "./styles.css";

const Search = ({ getQuery }) => {
  const [text, setText] = React.useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <section className="search">
      <p>Olá! Busque por albuns e acesse suas faixas!</p>
      <form>
        <input
          type="text"
          className="form-search"
          placeholder="Busque aqui"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </form>
    </section>
  );
};

export default Search;
