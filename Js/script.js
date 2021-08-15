"use strict";
//npx json-server --watch db.json
//start json-server

import { openModal } from "./modules/ModalWindow";
import Tabs from "./modules/Tabs";
import calc from "./modules/Calc";
import cart from "./modules/Carts";
import forms from "./modules/Form";
import ModalWindow from "./modules/ModalWindow";
import timer from "./modules/Timer";
import Slaider from "./modules/Slaider";

window.addEventListener("DOMContentLoaded", function () {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    3000000
  );

  Tabs(".tabheader__items", ".tabheader__item", ".tabcontent");
  calc();
  cart(".menu .container");
  forms(".modal", ".modal__dialog", modalTimerId);
  ModalWindow("data-close",".modal","[data-modal]",modalTimerId);
  timer("#days", "#hours", "#minutes", "#seconds", ".timer", "2021-10-20");
  Slaider({
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
