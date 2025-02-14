import React, { useEffect, useState } from "react";
import axiosinstnace from "../../../utils/axios_fetching";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");
   const base_url = "https://image.tmdb.org/t/p/original";

   useEffect(() => {
      const fetchData = async () => {
         try {
            // console.log(fetchUrl);
            const request = await axiosinstnace.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
         } catch (error) {
            console.log("Error fetching data:", error);
         }
      };
      fetchData();
   }, [fetchUrl]);

   // hundling click to set movie trailer when each vid is clicked
   const handleClick = (movie) => {
      if (trailerUrl) {
         setTrailerUrl("");
      } else {
         movieTrailer(movie.title || movie?.name || movie?.original_name)
            .then((url) => {
               console.log(url);
               const urlParams = new URLSearchParams(new URL(url).search);
               console.log("user parames printing:   ", urlParams);
               setTrailerUrl(urlParams.get("v"));
               //    setTrailerUrl(url); .... you can set the url and

               // if you dont want to find the id of the vid you can replace
               //    const embedUrl = url.replace("watch?v=", "embed/") + "?autoplay=1";
               //    setTrailerUrl(embedUrl);
            })
            .catch((error) => console.log("Error finding the trailer:\t", error));
      }
   };

   console.log("what is set:   ", trailerUrl);

   const opts = {
      height: "390",
      width: "100%",
      playerVars: {
         autoplay: 1,
      },
   };

   return (
      <div className="row">
         <h1>{title}</h1>
         <div className="row_posters">
            {movies.map((movie, index) => (
               <img
                  key={index + 1}
                  onClick={() => handleClick(movie)}
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.name}
                  className={`row_poster ${isLargeRow && "row_posterLarge big"}`}
               />
            ))}
         </div>

         {/* display the trailer  */}
         <div style={{ padding: "40px" }}>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>

         {/* we could have use youtube embadding  but that also requires the id of the video since the link has 'embed' in teh middle of the link. aye akalen demo we have alrady the link so replace madrg the link with embedding ..... but this also accepts */}

         {/*  you you want to do it without YT id. you can also modify and use it to display the video with YT id but the above method is realtevly easier */}
         {/* <div style={{ padding: "40px" }}>
            {trailerUrl && ( 
            //    <iframe width="560" height="315" src={trailerUrl} /* frameborder="0"*/
         /*       allow="autoplay;" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        //     )}
        //  </div>*/}
      </div>
   );
};

export default Row;
