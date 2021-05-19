import { Link } from "react-router-dom";
import React from "react";
import "./styles.css";
import { convertDate } from "../../Utils/utils";

const Back = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`}>
        <div className="card-inner">
          <div className="card-front">
            <img src={item.images[0].url} alt="" />
          </div>
          <div className="card-back">
            <h1>{item.name}</h1>
            <h5>{convertDate(item.release_date)}</h5>
            <ul>
              <li>
                <strong>Cantor:</strong> {item.artists[0].name}
              </li>
              <li>
                <strong>Total de faixas:</strong> {item.total_tracks}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Back;
