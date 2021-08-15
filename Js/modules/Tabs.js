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

export default Tabs;