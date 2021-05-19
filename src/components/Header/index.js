import React from "react";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import "./styles.css";

function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMM", {
    locale: ptBR,
  });
  return (
    <div className="header-container">
      <h1>Horizon-Spotify</h1>
      <p>Estágio dev web - Cliente Spotify</p>
      <span>{currentDate}</span>
    </div>
  );
}

export default Header;
