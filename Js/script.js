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
{
  // let bg = document.querySelector(".promo__bg");
  // bg.style.backgroundImage = 'url("/img/bg.jpg")';
  // const movieDB = {
  //   movies: [
  //     "Логан",
  //     "Лига справедливостиsdsdadasdasddsasdasdasdasd",
  //     "Ла-ла лэнд",
  //     "Одержимость",
  //     "Амогуус",
  //     "Скотт Пилигрим против",
  //     "Вертолебус",
  //     "Абобус",
  //   ],
  // };
  // const movieList = document.querySelector(".promo__interactive-list"),
  //   addForm = document.querySelector("form.add"),
  //   addInput = addForm.querySelector(".adding__input"),
  //   checkbox = addForm.querySelector('[type="checkbox"]');
  // addForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   let newFilms = addInput.value;
  //   const FavoriteFilms = checkbox.checked;
  //   if (FavoriteFilms) {
  //     console.log("оп");
  //   }
  //   if (newFilms && isNaN(newFilms) && newFilms.length < 50) {
  //     movieDB.movies.push(newFilms);
  //     SortArr(movieDB.movies);
  //     createMovieList(movieDB.movies, movieList);
  //   }
  //   e.target.reset();
  // });
  // function createMovieList(films, parent) {
  //   parent.innerHTML = "";
  //   SortArr(movieDB.movies);
  //   films.forEach((film, i) => {
  //     parent.innerHTML += `
  //           <li class="promo__interactive-item">${i + 1} ${film}
  //               <div class="delete"></div>
  //           </li>
  //       `;
  //   });
  //   document.querySelectorAll(".delete").forEach((item, i) => {
  //     item.addEventListener("click", () => {
  //       item.parentElement.remove();
  //       movieDB.movies.splice(i, 1);
  //       createMovieList(films, parent);
  //     });
  //   });
  //   deleteOst(movieDB.movies);
  // }
  // function SortArr(arr) {
  //   arr.sort();
  //   deleteOst(movieDB.movies);
  // }
  // function deleteOst(film) {
  //   film.forEach((item, i) => {
  //     if (item.length > 21) {
  //       item = `${item.slice(0, 19)}...`;
  //       film[i] = item;
  //     }
  //   });
  // }
  // createMovieList(movieDB.movies, movieList);
  // const wrap = document.querySelector(".wrapperr"),
  //   arrButton = wrap.getElementsByTagName("button");
  // wrap.addEventListener("click", (event) => {
  //   if (event.target && event.target.nodeName == "BUTTON")
  //     arrButton[1].classList.toggle("red");
  //   // console.dir(arrButton);
  // });
}

const navitem = document.querySelector(".tabheader__items"),
  item = document.querySelectorAll(".tabheader__item"),
  icons = document.querySelectorAll(".tabcontent");

function deleteItem() {
  icons.forEach((item) => {
    item.classList.remove('fade');
    item.style.display = "none";
  });

  item.forEach((i) => {
    i.classList.remove("tabheader__item_active");
  });
}
function firstBlock(i = 0) {
  icons[i].classList.add("fade");
  icons[i].style.display = "block";
  item[i].classList.add("tabheader__item_active");
}

deleteItem();
firstBlock();

navitem.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.classList.contains("tabheader__item")) {
    item.forEach((item, i) => {
      if (target == item) {
        console.log(i);
        deleteItem();
        firstBlock(i);
      }
    });
  }
});
