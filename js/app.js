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

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
  },
];

const movieList = document.querySelector("#movie-list");
console.log(movieList);

function showMovies() {
  movieList.innerHTML = "";

  for (const movie of movies) {
    const html = /* html */ `
      <article class="movie-card">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p>År: ${movie.year}</p>
          <p>Rating: ${movie.rating}</p>
        </div>
      </article>
    `;

    movieList.insertAdjacentHTML("beforeend", html);
  }
}

showMovies();