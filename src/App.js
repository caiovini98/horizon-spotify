import React, { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/index";
import Routes from "./routes";

const App = () => {
  useEffect(() => {
    handleToken();
  });

  const handleToken = () => {
    let curDateTime = new Date();
    const { expires_in } = JSON.parse(localStorage.getItem("token"));
    if (expires_in < curDateTime.getTime()) {
      localStorage.removeItem("token");
      fetchToken();
    }
  };

  const fetchToken = async () => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            "5caf287eef7143729c06b4d13b50f4a7" +
              ":" +
              "1bd834a6b2254af994625d96cb25780d"
          ),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      let curDateTime = new Date();
      curDateTime.setSeconds(
        curDateTime.getSeconds() + tokenResponse.data.expires_in
      );
      localStorage.setItem(
        "token",
        JSON.stringify({
          expires_in: curDateTime.getTime(),
          token: tokenResponse.data.access_token,
        })
      );
    });
  };

  return (
    <div className="container">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
