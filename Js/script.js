"use strict";
{
  // let numberOfFilms,
  //   a,
  //   b,
  //   d,
  //   chet = 0;
  // start();
  // const personalMovieDB = {
  //   count: numberOfFilms,
  //   movie: {},
  //   actors: {},
  //   genres: [],
  //   privat: true,
  //   toogleVisibleMyBD: function () {
  //     if (!this.privat) {
  //       this.privat = true;
  //     } else {
  //       this.privat = false;
  //     }
  //   },
  // };
  // // PersonalCategoriesCheckFilms();
  // // CycleForShowFilm();
  // // personalMovieDB.toogleVisibleMyBD();
  // // showMyBD();
  // // writeYourGenges();
  // function PersonalCategoriesCheckFilms() {
  //   if (personalMovieDB.count < 10) {
  //     console.log("Просмотрено мало фильмов");
  //   } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  //     console.log("Вы классический зритель");
  //   } else if (personalMovieDB.count > 30) {
  //     console.log("Вы киноман");
  //   } else {
  //     console.log("Ошибка");
  //   }
  // }
  // function start() {
  //   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  //   while (
  //     numberOfFilms == "" ||
  //     isNaN(numberOfFilms) ||
  //     numberOfFilms.length > 50 ||
  //     numberOfFilms == null
  //   ) {
  //     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  //   }
  // }
  // function CycleForShowFilm() {
  //   for (let i = 0; i < 2; i++) {
  //     a = prompt("Один из просмотренных фильмов");
  //     while (a == "" || a == null || a.length > 50 || !isNaN(a)) {
  //       a = prompt("Один из просмотренных фильмов");
  //     }
  //     b = +prompt("На сколько оцените его? От 0 до 10");
  //     while (b == "" || b > 10 || b == null || isNaN(b)) {
  //       b = +prompt("На сколько оцените его? От 0 до 10");
  //     }
  //     personalMovieDB.movie[a] = b;
  //     a = "";
  //     b = "";
  //   }
  // }
  // function showMyBD() {
  //   if (personalMovieDB.privat == false) {
  //     console.log(personalMovieDB);
  //   }
  // }
  // function writeYourGenges() {
  //   for (let i = 1; i < 4; i++) {
  //     d = prompt(`Ваш любимый жанр под номером ${i}`);
  //     while (d == "" || d == null || d.length > 50) {
  //       d = prompt(`Ваш любимый жанр под номером ${i}`);
  //     }
  //     personalMovieDB.genres[i - 1] = d;
  //   }
  //   personalMovieDB.genres.forEach(function (elem, i) {
  //     console.log(`Любимый жанр #${i + 1} - это ${elem}`);
  //   });
  // }
}
{
  // let wrapper = document.querySelector(".wrapper");
  // let div = document.createElement("div");
  // div.classList.add("black");
  // // wrapper[0].after(div);
  // // wrapper[1].remove();
  // wrapper.append(div);
  // let arr = [5, 5, 2, 5, 6, 8, 2, 6, 3, 7, 3, 6];
  // let ab = ["dsfds", "gfh", "dsfdfghs", "dsfdxgfhs", "dsfdfghs"];
  // console.log(...arr, ...ab);
}

let bg = document.querySelector(".promo__bg");

bg.style.backgroundImage = 'url("/img/bg.jpg")';

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Амогуус",
    "Скотт Пилигрим против...",
    "Вертолебус",
    "Абобус",
  ],
};

movieDB.movies = movieDB.movies.sort();

const movieList = document.querySelector(".promo__interactive-list");

movieDB.movies.forEach((item, i) => {
  movieList.innerHTML += `
      <li class="promo__interactive-item">${i + 1} - ${item}
         <div class="delete"></div>
      </li>
  `;
});
