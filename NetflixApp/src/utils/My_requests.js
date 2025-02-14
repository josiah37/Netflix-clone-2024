// const MY_API_KEY2 = import.meta.env.API_KEY;
const MY_API_KEY = import.meta.env.VITE_API_KEY;
console.log(MY_API_KEY, "\n2", "API_KEY2");
// we imported the api key from the above and later we will attach the base url with it. it would be like
// https://api.themoviedb.org/3/  +  discover/tv?api_key=  + c8d6a90b1e1eb917bbeb49664cec7ab2 +  &with_networks=213
const requests = {
   fetchTrending: `/trending/all/week?api_key=${MY_API_KEY}&language=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${MY_API_KEY}&with_networks=213`,
   fetchTopRatedMovies: `/movie/top_rated?api_key=${MY_API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=27`,
   // fetchRomanceMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=10749`, // X
   // fetchAnimationMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=16`,
   // fetchScienceFictionMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=878`,
   // fetchFamilyMovies: `/discover/movie?api_key=${MY_API_KEY}&with_genres=10751`,
   // fetchAdventure: `/discover/movie?api_key=${MY_API_KEY}&with_genres=12`,
   fetchDocumentaries: `/discover/movie?api_key=${MY_API_KEY}&with_genres=99`,
   fetchTvShow: `tv/popular?api_key=${MY_API_KEY}&language=en-US&page=1`,
};

export default requests;

// https://api.themoviedb.org/3/discover/tv?api_key=c8d6a90b1e1eb917bbeb49664cec7ab2&with_networks=213
