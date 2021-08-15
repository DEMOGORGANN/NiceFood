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

export { GetInfoForCart };
export { postData };
