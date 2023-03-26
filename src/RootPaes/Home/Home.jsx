import React, { useState, useEffect } from "react";

import axios from "axios";
import Character from "../../Character/Character";
import "./Home.css";

function Home() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((resp) => setInfo(resp.data));
  }, []);
  return (
    <>
      <div className="home-div">
        <h1 className="home-header">Game of Thrones</h1>
        <div>
          <Character info={info} />
        </div>
      </div>
    </>
  );
}

export default Home;
