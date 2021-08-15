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

export { closeModal };
export { openModal };
export default ModalWindow;


