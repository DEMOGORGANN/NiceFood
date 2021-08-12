"use strict";
//npx json-server --watch db.json
//start json-server

//================================================================================TABS
const navitem = document.querySelector(".tabheader__items"),
  item = document.querySelectorAll(".tabheader__item"),
  icons = document.querySelectorAll(".tabcontent");

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
  if (target && target.classList.contains("tabheader__item")) {
    item.forEach((item, i) => {
      if (target == item) {
        deleteItem();
        firstBlock(i);
      }
    });
  }
});

//===================================================================================================TIMER

//можно установить дату(временно)
const deadLine = "2021-10-20";

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
    days = WhoTimer.querySelector("#days"),
    hours = WhoTimer.querySelector("#hours"),
    minutes = WhoTimer.querySelector("#minutes"),
    seconds = WhoTimer.querySelector("#seconds"),
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

setTimeoutTimer(".timer", deadLine);

//====================================================================================================ModalWindow

//обьявление
const modalTrigger = document.querySelectorAll("[data-modal]"),
  modal = document.querySelector(".modal");

//событие на открытие формы на кнопки
modalTrigger.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

//закрытие модального окна на крестик, и на фон воокруг мод.окна
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

//открытие модального окна на 2 развичные кнопки, который забинжены на data-modal в верске
function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  clearInterval(modalTimerId);
}

//добавление события на на скрытие мод.окна
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.getAttribute("data-close") == "") {
    closeModal();
  }
});

//добавление события на на скрытие мод.окна
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});
//таймер через сколько появится мод.окно независимо нажал пользователь или неты
const modalTimerId = setTimeout(openModal, 300000);
// Изменил значение, чтобы не отвлекало

//показ подального окна при прокрутке на самый конец страницы
function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    //если произошло открытие, тогда удалить событие
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
//добавление события
window.addEventListener("scroll", showModalByScroll);
//============================================================================================================ClassForCart

// Использование класса с контекстом вызова
class CreateCart {
  // parent указан как стандартный, можно поменять указав в db.json, так же и с transfer(Курс доллара к грн)
  constructor(
    img,
    title,
    description,
    price,
    parent = ".menu .container",
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

//создание карточки, которая находится в db.json
GetInfoForCart("http://localhost:3000/menu").then((data) => {
  //Деструктизация обьекта
  data.forEach(({ img, title, description, price }) => {
    //создание с помощью класса CreateCart, и вызов метода NewCartForJs
    new CreateCart(img, title, description, price).NewCartForJs();
  });
});

//===============================================================================================================Forms

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
    postData("http://localhost:3000/requests", json)
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
    //время через которое уберется мод.окно
    setTimeout(() => {
      thanksModal.remove();
      modalWindowLikesClose.classList.remove("hide");
      modalWindowLikesClose.classList.add("show");
      closeModal();
    }, 4000);
  }
}

//========================================================================================SLAIDER

const wrapperSlider = document.querySelectorAll(".offer__slide"),
  btnPrev = document.querySelector(".offer__slider-prev"),
  btnNext = document.querySelector(".offer__slider-next"),
  current = document.querySelector("#current");

let slideIndex = 1;

ShowSlaid(slideIndex);

function ShowSlaid(n) {
  if (n < 1) {
    slideIndex = wrapperSlider.length;
  }
  if (n > wrapperSlider.length) {
    slideIndex = 1;
  }

  wrapperSlider.forEach((item) => {
    item.classList.add("hide");
  });
  wrapperSlider[slideIndex - 1].classList.remove("hide");
}
function plusIndex(n) {
  ShowSlaid((slideIndex += n));
  current.innerHTML = "0" + slideIndex;
}
btnNext.addEventListener("click", () => {
  plusIndex(1);
});
btnPrev.addEventListener("click", () => {
  plusIndex(-1);
});
