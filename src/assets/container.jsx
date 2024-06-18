// const movie = [
//   {
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg",
//     Title: "Ford v Ferrari",
//     Type: "movie",
//     Year: "2019",
//     imdbID: "tt1950186",
//   },
//   {
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
//     Title: "Interstellar",
//     Type: "movie",
//     Year: "2014",
//     imdbID: "tt0816692",
//   },
// ];

// export default function container() {
//   return (
//     <div className="container">
//       {movie.map((num) => (
//         <div key={num.imdbID}>
//           <div className="info">
//             <p className="year">{num.Year}</p>
//             <div>
//               <p className="type">{num.Type}</p>
//             </div>
//           </div>
//           <div className="poster">
//             <img
//               src={
//                 num.Poster !== "N/A"
//                   ? num.Poster
//                   : "https://via.placeholder.com/400"
//               }
//               alt="Movie Poster"
//             />
//           </div>
//           <div>
//             <p className="title">{num.Title}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }






// const movie = [
//   {
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg",
//     Title: "Ford v Ferrari",
//     Type: "movie",
//     Year: "2019",
//     imdbID: "tt1950186",
//   },
//   {
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
//     Title: "Interstellar",
//     Type: "movie",
//     Year: "2014",
//     imdbID: "tt0816692",
//   },
// ];

// export default function Container() {
//   return (
//     <div className="movie-list">
//       {movie.map((film) => (
//         <div key={film.imdbID} className="container">
//           <div className="info">
//             <p className="year">{film.Year}</p>
//             <div>
//               <p className="type">{film.Type}</p>
//             </div>
//           </div>
//           <div className="poster">
//             <img
//               src={
//                 film.Poster !== "N/A"
//                   ? film.Poster
//                   : "https://via.placeholder.com/400"
//               }
//               alt={`${film.Title} Poster`}
//             />
//           </div>
//           <div>
//             <p className="title">{film.Title}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



 export default function Container({
   movie: { imdbID, Year, Poster, Title, Type },
 }) {
   return (
     <div className="movie-list">
       <a href={"https://www.imdb.com/title/" + imdbID} target ="_blank">
         <div key={imdbID} className="container">
           <img
             src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
             alt={`${Title} Poster`}
           />
           <div className="info">
             <p className="year">{Year}</p>
             <p className="type">{Type}</p>
           </div>
           <div className="info1">
             <p className="title">{Title}</p>
           </div>
         </div>
       </a>
     </div>
   );
 }
