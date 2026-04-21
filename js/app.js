"use strict";

// let countDisplay = document.querySelector("#counter");
// let clickButton = document.querySelector("#click-button");
// let resetButton = document.querySelector("#reset-button");

// console.log(countDisplay, clickButton, resetButton);

// let count = 0;

// clickButton.addEventListener("click", function () {
//     count = count + 1;
//     countDisplay.textContent = count;
// });

// resetButton.addEventListener("click", function () {
//     count = 0;
//     countDisplay.textContent = count;
// });

// "use strict";

// const movieList = document.querySelector("#movie-list");

// const movies = [
//     {
//         title: "The Shawshank Redemption",
//         description: "blabla",
//         year: 1994
//     },
//     {
//         title: "The Godfather",
//         description: "blabla",
//         year: 1972
//     },
//     {
//         title: "The Dark Knight",
//         description: "blabla",
//         year: 2008
//     },
//     {
//         title: "Pulp Fiction",
//         description: "blabla",
//         year: 1994
//     },
//     {
//         title: "The Lord of the Rings: The Return of the King",
//         description: "blabla",
//         year: 2003
//     },
//     {
//         title: "Forrest Gump",
//         description: "blabla",
//         year: 1994
//     }
// ];

// for (const movie of movies) {
//   const html = /* html */ `
//         <article class="movie-card">
//         <div class="movie-info">
//             <h3>${movie.title}</h3>
//             <p>${movie.description}</p>
//             <p>Year: ${movie.year}</p>
//         </div>
//         </article>
//   `;

//   movieList.insertAdjacentHTML("beforeend", html);
// }


"use strict";

console.log("Movie App starter...");

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];
const movieList = document.querySelector("#movie-list");

fetchMovies();

async function fetchMovies() {
  console.log("Henter film data...");

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");
  console.log("Første film:", allMovies[0]);
  console.log("Alle film:", allMovies);

  showMovies(allMovies);
}

showMovies(movies);

function showMovies(movies) {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${formatMovieTitle(movie.title, movie.year)}</h3>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

function formatMovieTitle(title, year) {
  return `${title} (${year})`;
}

console.log(formatMovieTitle("Inception", 2010));