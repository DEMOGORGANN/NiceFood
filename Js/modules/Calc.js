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

export default calc;
