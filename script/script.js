alert(
  "Обчислити площу та периметр прямокутника, довжини сторін якого задаються."
);
{
  let number1 = parseInt(prompt("Введіть першу сторону"));
  let number2 = parseInt(prompt("Введіть другу сторону"));
  let product = number1 * number2;
  let product2 = number1 * 2 + number2 * 2;
  alert(`Площа прямокутника= ${product}см квадратних`);
  alert(`Периметр прямокутника= ${product2}см`);
}
alert("З клавіатури вводиться рік народження учня. Визначити вік учня.");
{
  let number1 = parseInt(prompt("Введіть ваш рік народження"));
  const THIS_YEAR = 2022;
  let product = THIS_YEAR - number1;
  alert(`Вам ${product} років`);
}
alert(
  "Одна сторінка книжки прочитується за Н хв, в книжці S сторінок. За скільки годин книжка буде прочитана? "
);
{
  let H = parseInt(prompt("Одна сторінка прочитуеться за ... сек"));
  let S = parseInt(prompt("В книжці сторінок"));
  const SEC_IN_HOUR = 3600;
  let product = H * S;
  let time = product / SEC_IN_HOUR;
  alert(`Книга буде прчитана за ${time} годин`);
}
alert(
  "W кг цукерок ділять порівну на М дітей. По скільки г цукерок дістанеться кожній дитині?"
);
{
  let W = parseInt(prompt("Склільки є кг цукерок"));
  let M = parseInt(prompt("Скільки є дітей"));
  let product = W / M;
  alert(`Кожній Дитині доствнеться ${product} кг цукерок`);
}
alert(
  "Порося щодня набирає вагу Р г. За скільки днів порося виросте в свиню вагою S кг?"
);
{
  let P = parseInt(prompt("введіть скильки грам набирає порося щодня"));
  let S = parseInt(prompt("ВВедіть кінцеву вагу свині у кг"));
  const WEIGHT = 1000;
  let D = S / P;
  let days = D * WEIGHT;
  alert(
    `Якщо спорося буде набирати  ${P} г щодня ,то вона вирасте до свині вашою ${S} кг за ${days} днів`
  );
}
