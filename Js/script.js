"use strict";

let numberOfFilms,
  a,
  b,
  d,
  chet = 0;

start();

const personalMovieDB = {
  count: numberOfFilms,
  movie: {},
  actors: {},
  genres: [],
  privat: true,
  toogleVisibleMyBD: function () {
    if (this.privat == false) {
      this.privat = true;
    } else {
      this.privat = false;
    }
  },
};

PersonalCategoriesCheckFilms();
CycleForShowFilm();
personalMovieDB.toogleVisibleMyBD();
showMyBD();
writeYourGenges();

function PersonalCategoriesCheckFilms() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Ошибка");
  }
}
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  while (
    numberOfFilms == "" ||
    isNaN(numberOfFilms) ||
    numberOfFilms.length > 50 ||
    numberOfFilms == null
  ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
}

function CycleForShowFilm() {
  for (let i = 0; i < 2; i++) {
    a = prompt("Один из просмотренных фильмов");
    while (a == "" || a == null || a.length > 50 || !isNaN(a)) {
      a = prompt("Один из просмотренных фильмов");
    }

    b = +prompt("На сколько оцените его? От 0 до 10");
    while (b == "" || b > 10 || b == null || isNaN(b)) {
      b = +prompt("На сколько оцените его? От 0 до 10");
    }
    personalMovieDB.movie[a] = b;
    a = "";
    b = "";
  }
}

function showMyBD() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
function writeYourGenges() {
  for (let i = 1; i < 4; i++) {
    d = prompt(`Ваш любимый жанр под номером ${i}`);
    while (d == "" || d == null || d.length > 50) {
      d = prompt(`Ваш любимый жанр под номером ${i}`);
    }
    personalMovieDB.genres[i - 1] = d;
  }
  personalMovieDB.genres.forEach(function (elem, i) {
        console.log(`Любимый жанр #${i+1} - это ${elem}`)
  });  
}
