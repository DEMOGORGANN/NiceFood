"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movie: {},
  actors: {},
  genres: [],
  privat: false,
};

let a, b;

// for (let i = 0; i < 2; i++) {
//   a = prompt("Один из просмотренных фильмов");
//   b = prompt("На сколько оцените его?");
//   if (a != null && b != null && a.length > 0 && b.length > 0) {
//     personalMovieDB.movie[a] = b;
//     a = "";
//     b = "";
//   } else {
//     i--;
//   }
// }
// let i =0;
// while (i<2) {
//   a = prompt("Один из просмотренных фильмов");
//   b = prompt("На сколько оцените его?");
//   i++;
//   if (a != null && b != null && a.length > 0 && b.length > 0) {
//     personalMovieDB.movie[a] = b;
//     a = "";
//     b = "";
//   } else {
//     i--;
//   }
// }
let i = 0;
do {
  i++;
  a = prompt("Один из просмотренных фильмов");
  b = prompt("На сколько оцените его?");
  if (a != null && b != null && a.length > 0 && b.length > 0) {
    personalMovieDB.movie[a] = b;
    a = "";
    b = "";
  } else {
    i--;
  }
} while (i < 2);



if (personalMovieDB.count < 10) {
  console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Ошибка");
}

console.log(personalMovieDB);
