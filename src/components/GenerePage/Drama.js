import React from "react";
import "./action.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
const Drama = () => {
  const history = useHistory();
  const [details, setDetails] = useState([]);
  const [key, setkeys] = useState(Object.keys(localStorage));

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json?genre=drama")
      .then((response) => {
        setDetails(response.data.data.movies);
      })
      .catch((error) => {
        alert("error");
      });
  }, []);

  console.log(details);
  return (
    <div className="first">
      {details.map((detail) => {
        const ViewDescription = () => {
          history.push({ pathname: "/MovieDescription", state: detail.id });
        };
        const handelWatchListClick = () => {
          localStorage.setItem("l" + detail.id, JSON.stringify(detail));
          setkeys(Object.keys(localStorage));
        };
        const watchlist = key.includes("l" + detail.id);
        const watched = key.includes("w" + detail.id);
      
         const handelWatchedList = () => {
    localStorage.setItem("w" + detail.id, JSON.stringify(detail));
    if (watchlist == true) {
      localStorage.removeItem("l" + detail.id);
    }
    setkeys(Object.keys(localStorage));
  };
        return (
          <div className="item" onClick={ViewDescription}>
            <img src={detail.medium_cover_image} className="movieImage" />
            <h3>Movie Name:{detail.title}</h3>
            <p>Rating:{detail.rating}</p>
            <p>Duration:{detail.runtime} minutes</p>
            {watchlist === true || watched === true ? (
          " "
        ) : (
            <button onClick={handelWatchListClick}>Add to watchList</button>
           )} 
            {watched === false ? (
            <button onClick={handelWatchedList}>Marked as watchedt</button>
            ) : (<p>Already watched</p>
              )} 
          </div>
        );
      })}
    </div>
  );
};

export default Drama;
