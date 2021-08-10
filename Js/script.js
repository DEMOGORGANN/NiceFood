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
//================================================================================TABS
const navitem = document.querySelector(".tabheader__items"),
  item = document.querySelectorAll(".tabheader__item"),
  icons = document.querySelectorAll(".tabcontent");

function deleteItem() {
  icons.forEach((item) => {
    item.classList.remove("fade");
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

//===================================================================================================TIMER

const deadLine = "2022-05-20";

function GetLastDat(endTime) {
  const k = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor(k / (1000 * 60 * 60 * 24)),
    hours = Math.floor((k / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((k / (1000 * 60)) % 60),
    seconds = Math.floor((k / 1000) % 60);
  if (k <= 0) {
    return {
      k: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  return {
    k,
    days,
    hours,
    minutes,
    seconds,
  };
}

function setTimeoutTimer(selector, endTimes) {
  const WhoTimer = document.querySelector(selector),
    days = WhoTimer.querySelector("#days"),
    hours = WhoTimer.querySelector("#hours"),
    minutes = WhoTimer.querySelector("#minutes"),
    seconds = WhoTimer.querySelector("#seconds"),
    setTimeoutAll = setInterval(UpdateTime, 1000);
  UpdateTime();
  function MathTimes(num) {
    if (num > 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function UpdateTime() {
    const newDate = GetLastDat(endTimes);
    days.innerHTML = MathTimes(newDate.days);
    hours.innerHTML = MathTimes(newDate.hours);
    minutes.innerHTML = MathTimes(newDate.minutes);
    seconds.innerHTML = MathTimes(newDate.seconds);
  }
}
setTimeoutTimer(".timer", deadLine);

//====================================================================================================ModalWindow

const modalTrigger = document.querySelectorAll("[data-modal]"),
  modal = document.querySelector(".modal");

modalTrigger.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  clearInterval(modalTimerId);
}

modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.getAttribute("data-close") == "") {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

const modalTimerId = setTimeout(openModal, 300000);
// Изменил значение, чтобы не отвлекало

function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);
//============================================================================================================ClassForCart

class CreateCart {
  constructor(img, title, description, price, parent, transfer, ...classes) {
    this.img = img;
    this.title = title;
    this.description = description;
    this.price = price;
    this.parent = document.querySelector(parent);
    this.transfer = transfer;
    this.FormaterToDollarForUA();
    this.classes = classes;
  }
  NewCartForJs() {
    const elem = document.createElement("div");
    if (this.classes.length === 0) {
      this.classes = "menu__item";
      elem.classList.add(this.classes);
    } else {
      elem.classList.add(this.classes);
    }
    elem.innerHTML = `
    <img src=${this.img} alt="vegy">
    <h3 class="menu__item-subtitle">${this.title}</h3>
    <div class="menu__item-descr">${this.description}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>

</div>`;
    this.parent.append(elem);
  }
  FormaterToDollarForUA() {
    this.price = this.price * this.transfer;
  }
}

for (let i = 0; i < 3; i++) {
  switch (i) {
    case 0:
      new CreateCart(
        "img/tabs/elite.jpg",
        'Меню “Премиум"',
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        11,
        ".menu .container",
        73
      ).NewCartForJs();
      break;
    case 1:
      new CreateCart(
        "img/tabs/vegy.jpg",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        7,
        ".menu .container",
        73
      ).NewCartForJs();
      break;
    case 2:
      new CreateCart(
        "img/tabs/post.jpg",
        'Меню "Постное"',
        "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
        9,
        ".menu .container",
        73
      ).NewCartForJs();
      break;
  }
}
//===============================================================================================================Forms

const forms = document.querySelectorAll("form");
const message = {
  loading: "img/form/spinner.svg",
  success: "Спасибо! Скоро мы с вами свяжемся",
  failure: "Что-то пошло не так...",
};

forms.forEach((item) => {
  postData(item);
});

function postData(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const mes = document.createElement("img");
    mes.src = message.loading;
    form.insertAdjacentElement("afterend", mes);

    const request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    const formData = new FormData(form);

    const obj = {};
    formData.forEach((item, i) => {
      obj[i] = item;
    });

    const json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener("load", () => {
      if (request.status === 200) {
        showThanksModalWindow(message.success);
        form.reset();
        mes.remove();
      } else {
        showThanksModalWindow(message.failure);
      }
    });
  });
  function showThanksModalWindow(message) {
    const modalWindowLikesClose = document.querySelector(".modal__dialog");

    openModal();

    modalWindowLikesClose.classList.add("hide");
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

    document.querySelector(".modal").append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      modalWindowLikesClose.classList.remove("hide");
      modalWindowLikesClose.classList.add("show");
      closeModal();
    }, 5000);
  }
}
