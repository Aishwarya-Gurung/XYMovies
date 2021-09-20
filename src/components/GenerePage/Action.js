import React from "react";
import "./action.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

function Action() {
  const [details, setDetails] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json?genre=action")
      .then((response) => {
        setDetails(response.data.data.movies);
      })
      .catch((error) => {
        alert("error");
      });
  }, []);

  return (
    <div className="first">
      {details.map((detail) => {
        const ViewDescription = () => {
          history.push({ pathname: "/MovieDescription", state: detail.id });
        };
        return (
          <div className="item" onClick={ViewDescription}>
            <img src={detail.medium_cover_image} className="movieImage" />
            <h3>Movie Name:{detail.title}</h3>
            <p>Rating:{detail.rating}</p>
            <p>Duration:{detail.runtime} minutes</p>
            <button>Add to watchList</button>
            <button>Marked as watchedt</button>
          </div>
        );
      })}
    </div>
  );
}

export default Action;
