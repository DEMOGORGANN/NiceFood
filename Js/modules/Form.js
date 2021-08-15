import { openModal } from "./ModalWindow";
import { closeModal } from "./ModalWindow";
import { postData } from "../services/services";

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
      const modalWindowLikesClose = document.querySelector(modDialog);

      openModal(modals, modalTimerId);

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
        closeModal(modals);
      }, 4000);
    }
  }
}

export default form;
