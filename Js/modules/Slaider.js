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

export default slaider;
