"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movie: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt("Один из просмотренных фильмов");
const b = prompt("На сколько оцените его?");
const c = prompt("Один из просмотренных фильмов");
const d = prompt("На сколько оцените егоsd?");

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;
console.log(personalMovieDB);
 