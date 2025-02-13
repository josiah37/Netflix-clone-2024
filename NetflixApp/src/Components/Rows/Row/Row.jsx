import React, { useEffect, useState } from "react";
import axiosinstnace from "../../../utils/axios_fetching";

import "./row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
   const [movies, setMovies] = useState([]);
   const base_url = "https://image.tmdb.org/t/p/original";

   useEffect(() => {
      const fetchData = async () => {
         try {
            console.log(fetchUrl);
            const request = await axiosinstnace.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
         } catch (error) {
            console.log("Error fetching data:", error);
         }
      };
      fetchData();
   }, [fetchUrl]);

   return (
      <div className="row">
         <h1>{title}</h1>
         <div className="row_posters">
            {movies.map((movie, index) => (
               <img
                  key={index}
                  onClick={() => handleClick(movie)}
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.name}
                  className={`row_poster ${isLargeRow && "row_posterLarge big"}`}
               />
            ))}
         </div>
      </div>
   );
};

export default Row;
