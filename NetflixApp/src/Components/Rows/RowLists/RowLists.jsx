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
         <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
         {/* <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />   try to brake one of the index  and also to mention animation as a row */}
         <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
         <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
   );
};

export default RowLists;
