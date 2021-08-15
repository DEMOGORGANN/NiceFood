/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/Calc.js":
/*!****************************!*\
  !*** ./js/modules/Calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
  //Обьявдения
  // поскольку все калькуляторы разные, нет смысла выносить четкие ссылки на элементы
  const result = document.querySelector(".calculating__result span");
  const gender = document.querySelectorAll(".gender");
  const FullActivity = document.querySelectorAll(".bgs");
  let sex = localStorage.getItem("sex") || "famale",
    helf,
    growth,
    ages,
    activity = localStorage.getItem("activity") || 1.375;

  //вызовы
  getMaleOrFamele();
  getActivityPerson();
  getInput();
  canc();
  localChecedActivity();
  localChecedSex();

  //получение данных пола
  function getMaleOrFamele() {
    gender.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.getAttribute("id") == "famale") {
          sex = "famale";
          localStorage.setItem("sex", sex);
        } else if (e.target.getAttribute("id") == "male") {
          sex = "male";
          localStorage.setItem("sex", sex);
        }
        gender.forEach((item) => {
          item.classList.remove("calculating__choose-item_active");
        });
        e.target.classList.add("calculating__choose-item_active");
        canc();
      });
    });
  }

  //получение данных с input-ов
  function getInput() {
    document.querySelectorAll(".inpt").forEach((item) => {
      item.addEventListener("input", (e) => {
        if (e.target.value.match(/\D/g)) {
          e.target.style.border = "1px solid red";
        } else {
          e.target.style.border = "none";
        }
        switch (e.target.getAttribute("id")) {
          case "height":
            helf = +e.target.value;
            break;
          case "weight":
            growth = +e.target.value;
            break;
          case "age":
            ages = +e.target.value;
            break;
        }
        canc();
      });
    });
  }

  //получение данных активности
  function getActivityPerson() {
    FullActivity.forEach((item) => {
      item.addEventListener("click", (e) => {
        activity = e.target.getAttribute("data-ratio");
        localStorage.setItem("activity", activity);
        console.log(activity);
        FullActivity.forEach((item) => {
          item.classList.remove("calculating__choose-item_active");
        });
        e.target.classList.add("calculating__choose-item_active");
        canc();
      });
    });
  }

  //калькулятор калорий
  function canc() {
    if (!sex || !helf || !growth || !ages || !activity) {
      return;
    }
    if (sex == "famale") {
      result.innerHTML = Math.round(
        (447.6 + 9.2 * growth + 3.1 * helf - 4.3 * ages) * activity
      );
    } else {
      result.innerHTML = Math.round(
        (88.36 + 13.4 * growth + 4.8 * helf - 5.7 * ages) * activity
      );
    }
  }

  //переключение подсветки выбраного пола
  function localChecedSex() {
    if (localStorage.getItem("sex") == "male") {
      gender[0].classList.remove("calculating__choose-item_active");
      gender[1].classList.add("calculating__choose-item_active");
    } else {
      gender[1].classList.remove("calculating__choose-item_active");
      gender[2].classList.add("calculating__choose-item_active");
    }
  }

  //переключение подсветки выбраной активности
  function localChecedActivity() {
    FullActivity.forEach((item) => {
      if (localStorage.getItem("activity") == item.getAttribute("data-ratio")) {
        item.classList.add("calculating__choose-item_active");
      } else {
        item.classList.remove("calculating__choose-item_active");
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);


/***/ }),

/***/ "./js/modules/Carts.js":
/*!*****************************!*\
  !*** ./js/modules/Carts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function cart(parents) {
  // Использование класса с контекстом вызова
  class CreateCart {
    // parent указан как стандартный, можно поменять указав в db.json, так же и с transfer(Курс доллара к грн)
    constructor(
      img,
      title,
      description,
      price,
      parent = parents,
      transfer = 27,
      ...classes
    ) {
      //присвоение
      this.img = img;
      this.title = title;
      this.description = description;
      this.price = price;
      this.parent = document.querySelector(parent);
      this.transfer = transfer;
      this.FormaterToDollarForUA();
      this.classes = classes;
    }
    // Создание карточки
    NewCartForJs() {
      //Создание div и присвоение классов которые обьявляются в ф-ции new CreateCart(..., ...classes)
      const elem = document.createElement("div");
      if (this.classes.length === 0) {
        this.classes = "menu__item";
        elem.classList.add(this.classes);
      } else {
        elem.classList.add(this.classes);
      }
      //добавление разметки к div
      elem.innerHTML = `
      <img src=${this.img} alt="vegy">
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.description}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
  
  </div>`;
      //добавление на страницу
      this.parent.append(elem);
    }
    //Форматер с Доллара на ГрН
    FormaterToDollarForUA() {
      this.price = this.price * this.transfer;
    }
  }


  //создание карточки, которая находится в db.json
  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.GetInfoForCart)("http://localhost:3000/menu").then((data) => {
    //Деструктизация обьекта
    data.forEach(({ img, title, description, price }) => {
      //создание с помощью класса CreateCart, и вызов метода NewCartForJs
      new CreateCart(img, title, description, price).NewCartForJs();
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);


/***/ }),

/***/ "./js/modules/Form.js":
/*!****************************!*\
  !*** ./js/modules/Form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalWindow */ "./js/modules/ModalWindow.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function form(modals, modDialog, modalTimerId) {
  const forms = document.querySelectorAll("form");
  const message = {
    //сообщения загрузки либо выполнения отправли в бд, работает с BuildPostData
    loading: "img/form/spinner.svg",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  //перебор форм
  forms.forEach((item) => {
    BuildPostData(item);
  });

  //построение формы
  function BuildPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      //спиннер при загрузке
      const mes = document.createElement("img");
      mes.src = message.loading;
      //выравнивание по середине
      mes.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement("afterend", mes);

      //Получение данных
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      //указание URL и форм которые необходимо отправить
      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/requests", json)
        .then(() => {
          //отправка в бд при удачном завершении
          showThanksModalWindow(message.success);
          mes.remove();
        })
        .catch(() => {
          //ошибка отправки на сервер
          showThanksModalWindow(message.failure);
        })
        .finally(() => {
          //в любом случае очистить форму
          form.reset();
        });
    });

    //Ф-ции показа модального окна
    function showThanksModalWindow(message) {
      const modalWindowLikesClose = document.querySelector(modDialog);

      (0,_ModalWindow__WEBPACK_IMPORTED_MODULE_0__.openModal)(modals, modalTimerId);

      modalWindowLikesClose.classList.add("hide");
      const thanksModal = document.createElement("div");
      thanksModal.classList.add(modDialog.slice(1));
      thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

      document.querySelector(modals).append(thanksModal);
      //время через которое уберется мод.окно
      setTimeout(() => {
        thanksModal.remove();
        modalWindowLikesClose.classList.remove("hide");
        modalWindowLikesClose.classList.add("show");
        (0,_ModalWindow__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modals);
      }, 4000);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ "./js/modules/ModalWindow.js":
/*!***********************************!*\
  !*** ./js/modules/ModalWindow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//закрытие модального окна на крестик, и на фон воокруг мод.окна
function closeModal(mod) {
  const modal = document.querySelector(mod);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

//открытие модального окна на 2 развичные кнопки, который забинжены на data-modal в верске
function openModal(mod, modalTimerId) {
  const modal = document.querySelector(mod);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
  
}

function ModalWindow(datClos,modals,dataAtrib, modalTimerId) {
  //обьявление
  const modalTrigger = document.querySelectorAll(dataAtrib),
    modal = document.querySelector(modals);

  //событие на открытие формы на кнопки
  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modals, modalTimerId));
  });

  //добавление события на на скрытие мод.окна
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute(datClos) == "") {
      closeModal(modals);
    }
  });

  //добавление события на на скрытие мод.окна
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modals);
    }
  });

  //показ подального окна при прокрутке на самый конец страницы
  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      //если произошло открытие, тогда удалить событие
      openModal(modals, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  //добавление события
  window.addEventListener("scroll", showModalByScroll);
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWindow);




/***/ }),

/***/ "./js/modules/Slaider.js":
/*!*******************************!*\
  !*** ./js/modules/Slaider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slaider({
  ofSlide,
  ofsliderprev,
  ofslidernext,
  currents,
  offerSlaidWrap,
  offerSlidIn,
  ofSlid,
  atribDataSlide,
}) {
  addSlaider();

  //создание слайдера
  function addSlaider() {
    //обьявления
    const Slider = document.querySelectorAll(ofSlide),
      btnPrev = document.querySelector(ofsliderprev),
      btnNext = document.querySelector(ofslidernext),
      current = document.querySelector(currents),
      slidesWrapper = document.querySelector(offerSlaidWrap),
      width = window.getComputedStyle(slidesWrapper).width,
      slidesField = document.querySelector( offerSlidIn);

    //обьявление счетчиков
    let slideIndex = 1,
      offset = 0;

    //Применение стилей и расчет всех слайдов
    slidesField.style.width = 100 * Slider.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";
    slidesWrapper.style.overflow = "hidden";

    //Присвоение каждому слайду ширины slidesWrapper, тоесть самого блока картинки
    Slider.forEach((slide) => {
      slide.style.width = width;
    });

    //событие на кнопку вперед
    btnNext.addEventListener("click", () => {
      //проверка на конец слайдера, если конец, перемещение в начало
      //получение данных и их сверка
      if (offset == gettingValues()) {
        offset = 0;
        slideIndex = 1;

        //иначе увеличение offset и счетчика элементов slideIndex
      } else {
        offset += +width.slice(0, width.length - 2);
        slideIndex++;
      }

      // в конце ф-ции, для трансформации слайдера
      TransformSlaider();

      gettingOperasityIndivator(slideIndex);
    });

    //событие на кнопку назад
    btnPrev.addEventListener("click", () => {
      //проверка слайдера, если начало, то перенос в конец
      if (offset == 0) {
        //получение данных в конце ф-ции
        offset = gettingValues();
        slideIndex = Slider.length;

        //иначе вычитание ширины обьекта и уменьшение slideIndex
      } else {
        offset -= +width.slice(0, width.length - 2);
        slideIndex--;
      }
      // в конце ф-ции, для трансформации слайдера
      TransformSlaider();

      gettingOperasityIndivator(slideIndex);
    });

    //индикаторы
    const offerSlider = document.querySelector(ofSlid),
      indicators = document.createElement("ol"),
      dots = [];

    //присвоение стилей
    offerSlider.style.position = "relative";
    indicators.classList.add("carousel-indicators");

    //добавление div индификаторов на страницу
    offerSlider.append(indicators);

    for (let i = 0; i < Slider.length; i++) {
      //создание индификатора
      const dot = document.createElement("li");

      //добавление атрибута каждому индификатору, у каждого собст значение от 1 до 0
      dot.setAttribute(atribDataSlide, i + 1);
      dot.classList.add("dot");

      //первому элементу прозрачность на 100%
      if (i == 0) {
        dot.style.opacity = 1;
      }

      //добавление индификаторов
      indicators.append(dot);
      dots.push(dot);
    }

    //событие на любой из индификаторов
    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const slideTo = e.target.getAttribute(atribDataSlide);

        //получение данных и трансформация
        slideIndex = slideTo;
        offset = +width.replace(/\D/gi, "") * (slideTo - 1);
        TransformSlaider();

        //переключение прозрачглсти у индификаторов
        gettingOperasityIndivator(slideTo);
      });
    });
    //трансформация слайдера на опр кол-во px
    function TransformSlaider() {
      slidesField.style.transform = `translateX(-${offset}px)`;
      current.innerHTML = "0" + slideIndex;
    }
    //вычисление значений
    function gettingValues() {
      //использование регулярных выражений
      return +width.replace(/\D/gi, "") * (Slider.length - 1);
    }
    //переключение прозрачглсти у индификаторов
    function gettingOperasityIndivator(index) {
      dots.forEach((dot) => (dot.style.opacity = ".5"));
      dots[index - 1].style.opacity = 1;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slaider);


/***/ }),

/***/ "./js/modules/Tabs.js":
/*!****************************!*\
  !*** ./js/modules/Tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Tabs(tabItems,tabItem,tabCont){
    const navitem = document.querySelector(tabItems),
  item = document.querySelectorAll(tabItem),
  icons = document.querySelectorAll(tabCont);

//удаление старого элемента
function deleteItem() {
  icons.forEach((item) => {
    item.classList.remove("fade");
    item.style.display = "none";
  });

  item.forEach((i) => {
    i.classList.remove("tabheader__item_active");
  });
}

//первый элемент при загрузке на страницу, в аргументах можно поменять стандарт,если не установлен в функции firstBlock(?). Также ф-ция для смены иконок
function firstBlock(i = 0) {
  //добавление к элемента классы
  icons[i].classList.add("fade");
  icons[i].style.display = "block";
  item[i].classList.add("tabheader__item_active");
}

deleteItem();
firstBlock();

//добавление события на элемент, используеться дилегирование событий
navitem.addEventListener("click", (e) => {
  //присвоение target событие для более удобного использования
  const target = e.target;
  if (target && target.classList.contains(tabItem.slice(1))) {
    item.forEach((item, i) => {
      if (target == item) {
        deleteItem();
        firstBlock(i);
      }
    });
  }
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "./js/modules/Timer.js":
/*!*****************************!*\
  !*** ./js/modules/Timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(day,hoursing,min,sec, tim, deadLine) {
  // вычисление времени до конца акции
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

  //получение элементов
  function setTimeoutTimer(selector, endTimes) {
    const WhoTimer = document.querySelector(selector),
      days = WhoTimer.querySelector(day),
      hours = WhoTimer.querySelector(hoursing),
      minutes = WhoTimer.querySelector(min),
      seconds = WhoTimer.querySelector(sec),
      //таймер для изменения времени каждую секунду
      setTimeoutAll = setInterval(UpdateTime, 1000);
    UpdateTime();
    function MathTimes(num) {
      if (num > 0 && num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    }
    //изменение времени
    function UpdateTime() {
      const newDate = GetLastDat(endTimes);
      days.innerHTML = MathTimes(newDate.days);
      hours.innerHTML = MathTimes(newDate.hours);
      minutes.innerHTML = MathTimes(newDate.minutes);
      seconds.innerHTML = MathTimes(newDate.seconds);
    }
  }

  setTimeoutTimer(tim, deadLine);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetInfoForCart": () => (/* binding */ GetInfoForCart),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
//получение данных с бд db.json
async function GetInfoForCart(url) {
  let res = await fetch(url);

  //Если ошибка
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  //Возвращаем Promis и обрабатываем в вызове ф-ции
  return await res.json();
}

//create fetch
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });
  return await res.json();
};





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ModalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ModalWindow */ "./js/modules/ModalWindow.js");
/* harmony import */ var _modules_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Tabs */ "./js/modules/Tabs.js");
/* harmony import */ var _modules_Calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Calc */ "./js/modules/Calc.js");
/* harmony import */ var _modules_Carts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Carts */ "./js/modules/Carts.js");
/* harmony import */ var _modules_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Form */ "./js/modules/Form.js");
/* harmony import */ var _modules_Timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Timer */ "./js/modules/Timer.js");
/* harmony import */ var _modules_Slaider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Slaider */ "./js/modules/Slaider.js");

//npx json-server --watch db.json
//start json-server










window.addEventListener("DOMContentLoaded", function () {
  const modalTimerId = setTimeout(
    () => (0,_modules_ModalWindow__WEBPACK_IMPORTED_MODULE_0__.openModal)(".modal", modalTimerId),
    3000000
  );

  (0,_modules_Tabs__WEBPACK_IMPORTED_MODULE_1__.default)(".tabheader__items", ".tabheader__item", ".tabcontent");
  (0,_modules_Calc__WEBPACK_IMPORTED_MODULE_2__.default)();
  (0,_modules_Carts__WEBPACK_IMPORTED_MODULE_3__.default)(".menu .container");
  (0,_modules_Form__WEBPACK_IMPORTED_MODULE_4__.default)(".modal", ".modal__dialog", modalTimerId);
  (0,_modules_ModalWindow__WEBPACK_IMPORTED_MODULE_0__.default)("data-close",".modal","[data-modal]",modalTimerId);
  (0,_modules_Timer__WEBPACK_IMPORTED_MODULE_5__.default)("#days", "#hours", "#minutes", "#seconds", ".timer", "2021-10-20");
  (0,_modules_Slaider__WEBPACK_IMPORTED_MODULE_6__.default)({
    ofSlide: ".offer__slide",
    ofsliderprev: ".offer__slider-prev",
    ofslidernext: ".offer__slider-next",
    currents: "#current",
    offerSlaidWrap: ".offer__slider-wrapper",
    offerSlidIn: ".offer__slider-inner",
    ofSlid: ".offer__slider",
    atribDataSlide: "data-slide-to",
  });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map