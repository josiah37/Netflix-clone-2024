import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/My_requests";

const RowLists = () => {
   return (
      // Div, just to make some gap btween all the banner and the the rows
      <div className="allRows">
         <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
         <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
         <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
         <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
         <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
         <Row title={"Animation Movies"} fetchUrl={requests.fetchAnimationMovies} />
         <Row title={"Adventure Movies"} fetchUrl={requests.fetchAdventure} />
         <Row title={"Family Movies"} fetchUrl={requests.fetchFamilyMovies} />
         <Row title={"Science Fiction"} fetchUrl={requests.fetchScienceFictionMovies} />
         <Row title="Mystery" fetchUrl={requests.fetchMystery} />
         <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      </div>
   );
};

export default RowLists;
