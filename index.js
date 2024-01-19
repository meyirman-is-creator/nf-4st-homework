// task 1 Перепишите функцию, используя оператор '?' или '||'
let age = prompt("Сколько тебе лет?");
function checkAge(age) {
  return  (age>18) || confirm("Родители разрешили?");
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

// ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение."));

// task 4 Сортировать в порядке по убыванию
let arr1 = [5, 2, 1, -10, 8];
arr1.sort((a,b) => b-a);

alert( arr1 ); // 8, 5, 2, 1, -10

// task 5 Трансформировать в массив имён
let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1 = [ vasya1, petya1, masha1 ];

let names = users1.map(item=>item.name);

// or
let names1 = [];
users1.forEach((item)=>names1.push(item.name));

alert( names );

// task 6 Трансформировать в объекты
let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya2, petya2, masha2 ];

let usersMapped = users.map(item=>({
    id: item.id,
    fullName: `${item.name} ${item.surname}`,
}));
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
// task 7 Получить средний возраст
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
let getAverageAge = function(arr) {
    let sum =0;
    arr.forEach((item) => {
        sum+=item.age;
    });
    return sum;
}
alert( getAverageAge(arr) /arr.length); // (25 + 30 + 29) / 3 = 28