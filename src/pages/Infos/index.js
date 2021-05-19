import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { convertDate, convertTime } from "../../Utils/utils";
import axios from "axios";
import "./styles.css";
import Player from "../../components/Player/index";

function Infos() {
  const { id } = useParams();
  const [itens, setItens] = useState("");
  const [play, setPlay] = useState("");
  const [nameMusic, setNameMusic] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const { token } = JSON.parse(localStorage.getItem("token"));
    const results = await axios(`https://api.spotify.com/v1/albums/${id}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    setItens(results.data);
  };

  return itens === "" ? (
    <h3 className="loading">Carregando...</h3>
  ) : (
    <React.Fragment>
      <section className="info-tracks">
        <img src={itens.images[1].url} alt="Imagem album" />

        <div className="everything">
          <div className="primary-infos">
            <h4>{itens.name}</h4>
            <h4>Popularidade: {itens.popularity}</h4>
          </div>
          <div className="secondary-infos">
            <h4>{convertDate(itens.release_date)}</h4>
            <h4>Artista: {itens.artists[0].name}</h4>
            <h4>
              Conferir album no spotify:
              <a href={itens.external_urls.spotify}> aqui</a>
            </h4>
            <h4>Tracks disponiveis: {itens.total_tracks}</h4>
          </div>
          <article className="copyrigth">
            {itens.copyrights.map((item) => (
              <h4>
                {item.text} {item.type} |
              </h4>
            ))}
          </article>
        </div>
      </section>
      <h2>Faixas</h2>

      <section className="tracks">
        <table cellSpacing={0}>
          <thead>
            <th>Nome</th>
            <th>Artista(s)</th>
            <th>Duração</th>
            <th>Ouvir preview</th>
            <th>URL p/ Spotify</th>
          </thead>
          <tbody>
            {itens.tracks.items.map((track) => {
              return (
                <tr>
                  <td>{track.name}</td>
                  <td>
                    {track.artists.length > 1
                      ? track.artists.map((artistas) => (
                          <h5>{artistas.name}</h5>
                        ))
                      : track.artists[0].name}
                  </td>
                  <td>{convertTime(track.duration_ms)}</td>
                  <td>
                    <button
                      onClick={() => {
                        setPlay(track.preview_url);
                        setNameMusic(track.name);
                      }}
                    >
                      Ouvir uma preview
                    </button>
                  </td>
                  <td>
                    <a href={track.external_urls.spotify}>Clique aqui</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <Player music={play} nameMusic={nameMusic} />
    </React.Fragment>
  );
}

export default Infos;
