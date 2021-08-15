import { GetInfoForCart } from "../services/services";
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
  GetInfoForCart("http://localhost:3000/menu").then((data) => {
    //Деструктизация обьекта
    data.forEach(({ img, title, description, price }) => {
      //создание с помощью класса CreateCart, и вызов метода NewCartForJs
      new CreateCart(img, title, description, price).NewCartForJs();
    });
  });
}

export default cart;
