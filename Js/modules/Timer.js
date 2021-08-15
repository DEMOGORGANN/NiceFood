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

export default timer;
