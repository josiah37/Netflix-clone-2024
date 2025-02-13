import React, { useEffect, useState } from "react";
import axiosinstnace from "../../utils/axios_fetching";
import requests from "../../utils/My_requests";
// import styles from "./Banner.module.css";
import "./Banner.css";

const Banner = () => {
   const [movie, setMovie] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         try {
            const request = await axiosinstnace.get(requests.fetchNetflixOriginals);
            console.log(request);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
         } catch (error) {
            console.log("error", error);
         }
      };
      fetchData();
   }, []);

//    console.log("i have recived the data it it here:", movie);

   const truncate = (text, limit) => {
      return text?.length > limit ? text.substring(0, limit) + "..." : text;
   };

   //    const truncate = (text, limit) => {
   //       // Check if the text length is within the limit
   //       console.log(text, limit);
   //       if (text.length <= limit) {
   //          return text;
   //       }

   //       // Find the last space before the limit
   //       const lastSpaceIndex = text.lastIndexOf(" ", limit);

   //       // If there's no space, truncate at the limit
   //       const truncatedText = lastSpaceIndex !== -1 ? text.substring(0, lastSpaceIndex) : text.substring(0, limit);

   //       return truncatedText + "..."; // Add ellipsis
   //    };

   return (
      <div
         className="banner"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
         }}
      >
         <div className="banner_contents">
            <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
               <button className="banner_button play">Play</button>
               <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
         </div>
         <div className="banner_fadeBottom" />
      </div>
   );
};

export default Banner;
