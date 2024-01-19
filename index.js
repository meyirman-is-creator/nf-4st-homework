// task 1 Перепишите функцию, используя оператор '?' или '||'
let age = prompt("Сколько тебе лет?");
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}
checkAge(age);
// допольнительный код к task 1
let age1 = prompt("Сколько тебе лет ?");
let message = age1 > 18 ? true : confirm("Родители разрешили?");

// task 2 Функция pow(x,n)
let pow = function (x, n) {
  let num = 1;
  for (let i = 0; i < n; i++) {
    num *= x;
  }
  return num;
};
console.log(pow(3, 2));

// task 3 Перепишите с использованием функции-стрелки
const ask = (question, yes, no) => confirm(question) ? yes() : no();

ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение."));
