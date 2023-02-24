// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

// function byField(field){
//     return (a, b) => a[field] >= b[field] ? 1 : -1;
// }

// try{
//     abc();
// }catch(e){
//     console.log("Ебать обработал ошибку с дочернего")
// }

// function abc(){
    
//     try{
//         blalbalbla();
//     }
//     catch(e){
//         ...
//         if(e.name == "SyntaxError"){
//             throw e;
//         }
//     }

// }
// users.sort(byField('age'));

// users.forEach(x => alert(x.name));
























// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

//Otvet

// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };
// let value = JSON.stringify( user );
// let result = JSON.parse(value);
// alert (result);







// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

//Otvet

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
//   function topSalary(obj){
//     let result = 0;
//     let resultName = null;
//     for([key , salary] of Object.entries(obj)){
//         if (result < salary){
//             result = salary;
//             resultName = key;
//         }
//     }
//     return resultName;
//   }
//   let zp = topSalary(salaries);
//   alert(zp);










// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// // ... = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

//Ответ

//  let user = {
//    name: "John",
//    years: 30
//  };
// let { name, years: age, isAdmin = false} = user;
// alert( isAdmin );









// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».


//Otvet

//  let user = {
//   name: 'John',
//   age: 30
// };
// function count (obj){
//     return Object.entries(obj).length;
// }
// alert (count (user));













// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), 
// которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650


//Otvet

//  let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//  };
// function sumSalaries(obj){
//     let sum = 0;
//     for(let value of Object.values(obj)){
//         sum += value;
//     }
//     return sum;
// }

//  alert( sumSalaries(salaries) ); // 650













// function sum(n){
//     let arr = [1, 1];
    
//     if(n <= 2){
//         return arr[0]
//     }

//     for(let i = 0; i < n; i++){
//         if(i >= 2){
//             arr.push(arr[i-2] + arr[i - 1])
//         }
//     }

//     return arr[n - 1];
// }
// alert(sum(8))












// найти макс элемент в массиве

//1-ый вариант

// let arr = [2,5,6,43,23,12];
// function maxElem (arr){
//     function compareNumeric(a, b) {
//         if (a > b) return 1;
//         if (a == b) return 0;
//         if (a < b) return -1;
//       }
//    arr.sort(compareNumeric);
//    let result = arr.slice(-1);
//    return result;
// }

// alert(maxElem(arr));


// 2 вариант


// alert(Math.max(...arr,9,0,10))

//3 вариант

// function maxElem(arr){
//     let maxElem = arr[0];
//     for(let item of arr){
//         if(item > maxElem){
//             maxElem = item;
//         }
//     }
//     return maxElem;
// }
// alert(maxElem(arr))


//4 вариант

// let maxItem = arr.sort((a,b) => b - a)[0]














// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив,
// содержащий только уникальные элементы arr.
// Например:
// function unique(arr) {
//   /* ваш код */
// }
// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];
// alert( unique(strings) ); // кришна, харе, :-O


//otvet

// function unique(arr) {
//     let items = [];
//     for( let i = 0; i < arr.length; i++){
//             if (!items.includes(arr[i])){
//                 items.push(arr[i]);
//             }
//     }
//     return items;
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
//   alert( unique(strings) ); // кришна, харе, :-O











// Напишите функцию getAverageAge(users), 
// которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//ответ

// function getAverageAge (arr){
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
// sum += arr[i].age ;
// }
// return sum / arr.length;
// }
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); 









// Напишите функцию shuffle(array),
//  которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
// Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность. 
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., 
// с равной вероятностью каждого случая.


//otvet
// let arr = [6,89,32];
// function shuffle(arr){
//     return arr.sort(() => Math.random() - 0.5)
// }
// alert(shuffle(arr));









// Напишите функцию sortByAge(users),
//  которая принимает массив объектов со свойством age и сортирует их по нему.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

//ответ

// let vasya = { name: "Вася", age: 25 };
//  let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(arr){
// return arr.sort((a,b) => a.age - b.age);
// }

// sortByAge(arr);

// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя











// У вас есть массив объектов user,
//  и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 
// где fullName – состоит из name и surname.

// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... */

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. 
// Попробуйте использовать =>. Это небольшая уловка.

//Otvet


// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => {
//      return {
//         fullName: user.name + ' ' +  user.surname , 
//         id :user.id
//     }
// })

// console.log(usersMapped);
// alert( usersMapped[1].id ) 
// alert( usersMapped[1].fullName ) 








// У вас есть массив объектов user, и в каждом из них есть user.name. 
// Напишите код, который преобразует их в массив имён.

// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = /* ... ваш код */
// alert( names ); // Вася, Петя, Маша

//Otvet

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = users.map (item => item.name);
// alert( names ); 







// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в
//  формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
//  Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10

// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

//Otvet


// function Calculator() {

//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
//     this.calculate = function(str) {
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
//       return this.methods[op](a, b);
//     }
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }











// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

//Otvet

// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr){
//     return [...arr].sort();
// }
// let sorted = copySorted(arr);
// alert( sorted );
// alert( arr );








// let arr = [5, 2, 1, -10, 8];
// // ... ваш код для сортировки по убыванию
// alert( arr ); // 8, 5, 2, 1, -10

//Ответ

// let arr = [4, 3, 7, 32, -5, 5];
// arr.sort(function(a, b){
//     return b - a;
// })
// alert ( arr );








// Напишите функцию filterRangeInPlace(arr, a, b), 
// которая принимает массив arr и удаляет из него все значения кроме тех, 
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]


//otvet
// let arr =[3, 6, 8, 30];
// function filterRangeInPlace(arr, a, b){
//     for (let i = 0; i < arr.length ; i++ ){
//         if (a <= arr[i] && arr[i]<= b){
//         }else {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// alert(filterRangeInPlace(arr,5,100 ));
// alert(arr);









// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
//  ищет элементы со значениями больше или равными a и меньше или равными b 
//  и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

//Otvet
// let arrow = [3, 4, 5, 6, 7];
// function filterRange(arr, a, b){
// let result = arr.filter(item => item >= a && item <= b )
// return result;
// }
// alert(filterRange(arrow, 5, 8));
// alert(arrow);











// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

//Ответ


// let str = `-webkit-transition`;
// function camelize(str){
    
//     let arr = str.split('-');
//     let newArr = arr.map((item, i) => i === 0 ? item : item[0].toUpperCase() + item.substring(1));
//     let newStr = newArr.join('');
    
//     return newStr;
// }
// alert(camelize(str));








// let arr =[1, 2, 3];
// let newArr = arr.map( item => item * 10)
// alert(newArr);






// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
//   // возвращает массив, состоящий из двух первых пользователей
//   let someUsers = users.filter(item => item.id < 3);
  
//   alert(someUsers.length); // 2
//   for(let item of someUsers){
//     alert(item.id + ': ' + item.name)
//   }







// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, 
// пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

//otvet

// function sumInput(){
//     let number;
//     let array = [];

//     while(true){
//         number = prompt('Введите значение:','');

//         if(number == '' || number == null || isNaN(number)){
//             break;
//         }
        
//         array.push(+number);
//     }

//     return sum(array);
// }

// function sum(arr){
//     let sum = 0;

//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }

//     return sum;
// }

// alert(sumInput());











// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика».
// Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл


//ответ

// let styles = ['Джаз','Блюз'];
// styles.push('Рок-н-ролл');
// //alert(styles);
// styles[1] = 'Классика';
// //alert(styles);
// let result = styles[Math.floor(styles.length/2)]
// //alert(result);
// let udalenie = styles.shift();
// //alert(udalenie);
// styles.unshift('Регги');
// styles.unshift('Рэп');
// //alert(styles);
// function showArray(arr){
//     //[0] - Джаз
//     //[1] - Блюз
//     let result = '' 
//     for(let i = 0; i < arr.length; i++){
//         result += `[${i}] - ${arr[i]}` + '\n'
//     }
//     return result;
// }

// alert(showArray(styles))












// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой
//  строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

//Otvet

// function extractCurrencyValue(str){
// return +str.slice(1);
// }
// alert(extractCurrencyValue('$12'));











// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
//  если она превосходит maxlength, заменяет конец str на "…", так, 
//  чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, 
// либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

//Ответ

// function truncate(str, maxlength){
//     if (str.length > maxlength){
//       return str.slice(0,maxlength) + '...';
//     } else { return str } 
// }
// alert(truncate('Angelina', 5));







// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

//otvet

// function checkSpam(str){
// str = str.toLowerCase();
// return str.includes('viagra') || str.includes('xxx');
// }
// alert (checkSpam('auidfVIAGRA'));










// Напишите функцию ucFirst(str), возвращающую строку str
// с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

//Otvet

// function ucFirst(name){
// return name[0].toUpperCase() + name.slice(1);
// }
// ucFirst('artem');

// let result = ucFirst('angelina')

// alert(result)









// let str = 'Artem Angelina';
// let result = str.slice(6);
// alert(result);








// Создайте функцию readNumber, которая будет запрашивать
//  ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, 
// отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

//Otvet


// function readNumber(){
//     let value;

//     do {

//         value = prompt('Введите число:', '');

//     }while (!isFinite(value))

//     if (value === null || value === '') return null;

//     return +value;
// }
// alert(readNumber());















//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

//Otvet

// let a = +prompt('Введите 1 число');
// let b = +prompt('Введите 2 число');
// alert( a + b );










// let user = null;
// alert( user?.address ); // undefined
// alert( user?.address.street ); // undefined



// let user = {};
// alert( user?.address ); // undefined
// alert( user?.address.street ); // error










// let newUser = {
//     name: "John",
//     age: 30,
// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       alert(this.name);
//     }
  
//   };
  
//   user.sayHi();










// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// otvet:

// let menu = {
//  width: 200,
//  height: 300,
//  title: "My menu"
// };
// function multiplyNumeric(obj){
//     for (let prom in obj){
//         if (typeof obj[prom] == 'number'){
//             obj[prom] = obj[prom] * 2;
//         };
//     }
// }
// multiplyNumeric(menu);
// alert(menu.height)











// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// otvet

// let salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }
// function sum(salaries){
//     let vilka = 0;
//     for(let prom in salaries){
//         vilka += salaries[prom];
//     }
//     return vilka;
// }
// alert(sum(salaries));

// let obj = { 
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//     Artem: 200,
//     Angelina: 500,
//     Igor: 100,
//    }

// alert(sum({}))
// alert(sum(obj))

















// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false



// Ответ:

// let obj = {
//     age:30,
// };
// function isEmpty(obj){
//     for (let prom in obj){
//         return false;
//     }
//     return true;
// }
// alert( isEmpty(obj) ); 












// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.


// ответ:

// let user = {
//     name: 'Jonh',
//     surname: 'Smith' ,
// };
// user.name = 'Pete';
// delete user.name;







// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert( bag[fruit] ); // 5, если fruit="apple"








// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("Что вы хотите узнать о пользователе?", "name");
  
//   // доступ к свойству через переменную
//   alert( user[key] ); // John (если ввели "name")













// let user = {
//     Age: 18,
//     Name: 'Artem',
//     Country: 'Belarus',
//     City: 'Minsk',
//     'dolboeb ebaniu' : 18
// }

// function getProp(ans){
//     return ans ? 'Age' : 'Name';
// }

// let propName = getProp(confirm('Вам есть 18 ?'));

// alert(user[propName])









// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// Ответ:

// let ask = ( question, yes, no ) => confirm(question) ? yes() : no();
// alert (ask ('Вы согласны?', () => 'Вы согласились.', () => 'Вы отменили выполнение.'));










// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// Ответ


// function getPow(x,n){
// let result = x ** n;
// return result;
// }
// let answer = getPow(3,3);
// alert(answer);










// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// ответ


// function getMin(a,b){
//     if (a < b){
//         return  a ;
//     }else{
//         return  b ;
//     }
// }
// let result = getMin(100,1000);
// alert(result);
























// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
//   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

//   Сделайте два варианта функции checkAge:
  
//   Используя оператор ?
//   Используя оператор ||

// Ответ

// function checkAge(age) {
// return age >18 || confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
//   }












// const number = +prompt('Введите число между 0 и 3', '');;
// switch(number){
// case 0:
//     alert('Вы ввели число 0');
//     break;
// case 1:
//     alert('Вы ввели число 1');
//     break;
// case 2:
// case 3:
//     alert('Вы ввели число 2, а может и 3');    
//     break;
// }

