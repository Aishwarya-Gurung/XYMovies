import React from "react";
import "./generSlide.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { BrowserRouter, Link } from "react-router-dom";
import { useHistory } from "react-router";

const ThrillerSlide = () => {
  const [details, setDetails] = useState([]);
  const [movies, setMovies] = useState({ prev: 0, next: 4 });
  const history = useHistory();
  const [key, setkeys] = useState(Object.keys(localStorage));

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json?genre=thriller&&limit=10")
      .then((response) => {
        setDetails(response.data.data.movies);
      })
      .catch((error) => {
        alert("error");
      });
  }, []);

  const handelPrevBtn = () => {
    if (movies.prev > 0) {
      movies.prev -= 1;
      movies.next -= 1;
    }
    setMovies({ ...movies });
  };

  const handelNextBtn = () => {
    if (movies.next < 10) {
      movies.prev += 1;
      movies.next += 1;
    }
    setMovies({ ...movies });
  };

  return (
    <section className="main__slider">
      <div className="subslider__main">
        <h2>Genre: Thriller</h2>

        {movies.prev > 0 ? (
          <FaArrowAltCircleLeft
            className="left-arrow__slider"
            onClick={() => handelPrevBtn()}
          />
        ) : (
          ""
        )}
        {movies.next < 10 ? (
          <FaArrowAltCircleRight
            className="right-arrow__slider"
            onClick={() => handelNextBtn()}
          />
        ) : (
          ""
        )}
        {details
          .slice(movies.prev, movies.next)

          .map((detail, index) => {
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
              <div className="main__container" onClick={ViewDescription}>
                <img
                  src={detail.medium_cover_image}
                  alt="movie"
                  className="image__slider"
                />
                <h4>Movie Name:{detail.title}</h4>
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

        <h6>
          {" "}
          <Link to="/Thriller">See More...</Link>
        </h6>
      </div>
    </section>
  );
};

export default ThrillerSlide;
