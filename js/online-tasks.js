// goit-39-js-hw-02
console.log('');
console.log('~~~ goit-39-js-hw-02 ~~~');
console.log('');

// 2.1
console.log('');
console.log('~~~ Task 2.1 ~~~');
console.log('');
// Задание - Запиши условие в инструкции if так, чтобы функция работала правильно.

// Тесты для проверки - Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=
// Вызов checkAge(20) возвращает "You are an adult"
// Вызов checkAge(8) возвращает "You are a minor"
// Вызов checkAge(14) возвращает "You are a minor"
// Вызов checkAge(38) возвращает "You are an adult"
// В теле функции есть только одна инструкция if
// В теле функции нет инструкции else или else if

function checkAge1(age1) {
    let message1;
    if (age1 >= 18) {
        // Change code above this line
        // return 'You are an adult';
        message1 = 'You are an adult';
    }
    // return 'You are a minor';
    else {
        message1 = 'You are a minor';
    }
    console.log(message1);
}
checkAge1(17);
// You are a minor
checkAge1(18);
// You are an adult
checkAge1(19);
// You are an adult

// 2.2
console.log('');
console.log('~~~ Task 2.2 ~~~');
console.log('');
/*
Задача: проверка пароля (ранний возврат)
Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора
в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
удали переменную message
удали else
код должен работать так же, как и до оптимизации
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line
  let message;
  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }
  return message;
  // Change code above this line
}
*/

function checkPassword2(password2) {
    const ADMIN_PASSWORD2 = 'jqueryismyjam';
    let message2;
    if (password2 === ADMIN_PASSWORD2) {
        // return 'Welcome!';
        message2 = 'Welcome!';
    } else {
        // return 'Access denied, wrong password!';
        message2 = 'Access denied, wrong password!';
    }
    console.log(message2);
}
checkPassword2(`jqueryismyja`);
// Access denied, wrong password!
checkPassword2(`jqueryismyjam`);
// Welcome!

// 2.3
console.log('');
console.log('~~~ Task 2.3 ~~~');
console.log('');
/*
Задача: склад товаров 3.0
Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате.
Она принимает два параметра, значения которых будут задаваться во время её вызова.
available - доступное количество товаров на складе
ordered - количество единиц товара в заказе
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».
function checkStorage(available, ordered) {
  // Change code below this line
  let message;
  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  return message;
  // Change code above this line
}
*/

function checkStorage3(available3, ordered3) {
    let message3;
    if (ordered3 === 0) {
        // return 'Your order is empty!';
        message3 = 'Your order is empty!';
    } else {
        if (ordered3 > available3) {
            // return 'Your order is too large, not enough goods in stock!';
            message3 = 'Your order is too large, not enough goods in stock!';
        } else {
            // return 'The order is accepted, our manager will contact you';
            message3 = 'The order is accepted, our manager will contact you';
        }
    }
    console.log(message3);
}
checkStorage3(100, 0);
// Your order is empty!
checkStorage3(100, 101);
// Your order is too large, not enough goods in stock!
checkStorage3(100, 99);
// The order is accepted, our manager will contact you
checkStorage3(100, 100);
// The order is accepted, our manager will contact you

// 2.4
console.log('');
console.log('~~~ Task 2.4 ~~~');
console.log('');
/* Задание
Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".
Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange"] 
Создание массива
Массив используется для хранения упорядоченной коллекции элементов.
Он объявляется открывающей и закрывающей квадратной скобками [] - литералом массива.
Внутри скобок каждый элемент массива разделяется запятой.
const planets = ["Earth", "Mars", "Venus"];
Полезно
При объявлении переменной для объекта или массива программисты обычно используют const.
Они делают это для того, чтобы случайно не перезаписать значение, т.к. попытка перезаписи вызовет ошибку
до того как код попадет к пользователю.
*/

const fruits4 = ['apple4', 'plum4', 'pear4', 'orange4'];

// 2.5
console.log('');
console.log('~~~ Task 2.5 ~~~');
console.log('');
// Задача 5

/* 
Задание
Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
Имя переменной	Значение переменной
firstElement	первый элемент массива
secondElement	второй элемент массива
lastElement	последний элемент массива
Тесты
Объявлена переменная firstElement
Значение переменной firstElement это строка "apple"
Объявлена переменная secondElement
Значение переменной secondElement это строка "plum"
Объявлена переменная lastElement
Значение переменной lastElement это строка "orange" 
Доступ к элементам по индексу
Для доступа к значению элемента массива применяют синтаксис квадратных скобок массив[индекс].
Между именем переменной массива и квадратными скобками не должно быть пробела.
Внимание
Индексация элементов массива начинается с нуля.
const planets = ["Earth", "Mars", "Venus"];
planets[0]; // "Earth"
planets[2]; // "Venus"
*/

const fruits5 = ['apple5', 'plum5', 'pear5', 'orange5'];
const firstElement5 = fruits5[0];
const secondElement5 = fruits5[1];
const lastElement5 = fruits5[3];

// 2.6
console.log('');
console.log('~~~ Task 2.6 ~~~');
console.log('');
// Задача 6

/* Переопределение значения элемента
В отличии от строк, элементы массива можно изменять обратившись к ним по индексу и присвоив другое значение.
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers[2] = 14;
console.log(numbers); // [7, 2, 14, 4, 5];
Задание
Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".
Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "peach", "pear", "banana"]
 */

const fruits6 = ['apple6', 'plum6', 'pear6', 'orange6'];
fruits6[1] = 'peach6';
fruits6[3] = 'banana6';

// 2.7
console.log('');
console.log('~~~ Task 2.7 ~~~');
console.log('');
// Задача 7
/*
Задание
Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.
Тесты
Объявлена переменная fruitsArrayLength
Значение переменной fruitsArrayLength это число 4 
*/

const fruits7 = ['apple7', 'peach7', 'pear7', 'banana7'];
const fruitsArrayLength7 = fruits7.length;

// 2.8
console.log('');
console.log('~~~ Task 2.8 ~~~');
console.log('');
// Задача 8
/*
Задание
Объяви две перемнные:
Имя переменной - Ожидаемое значение
lastElementIndex - Индекс последнего элемента масcива fruits через длина_массива - 1
lastElement	- Значение последнего элемента массива
Тесты
Объявлена переменная lastElementIndex
Значение переменной lastElementIndex это число 3
Объявлена переменная lastElement
Значение переменной lastElementIndex это строка "banana"
 */

const fruits8 = ['apple8', 'peach8', 'pear8', 'banana8'];

// Change code below this line
const lastElementIndex8 = fruits8.length - 1;
const lastElement8 = fruits8[lastElementIndex8];
console.log(lastElement8);
// banana8;

// 2.9
console.log('');
console.log('~~~ Task 2.9 ~~~');
console.log('');
// Задача 9

/* Задача: Крайние элементы массива
Задание
Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
Тесты
Объявлена функция getExtremeElements(array)
Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]
 */

function getExtremeElements9(array) {
    const arrayBorders9 = [];
    arrayBorders9.push(array[0]);
    arrayBorders9.push(array[array.length - 1]);
    // return arrayBorders;
    console.log(arrayBorders9);
}
getExtremeElements9(['apple', 'peach', 'pear', 'banana']);
// [ 'apple', 'banana' ]

// 2.10
console.log('');
console.log('~~~ Task 2.10 ~~~');
console.log('');
// Задача 10

/* Метод строк split()
Метод split(delimeter) позволяет превратить строку в массив, «разбив» его 
по разделителю delimeter. Если разделитель это пустая строка, то получится массив 
отдельных символов. Разделителем может быть один или несколько символов.
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]
const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]
*/

/*Задание
Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words
результат разделения строки message по разделителю delimeter - массив строк.
Тесты
Объявлена функция splitMessage(message, delimeter)
Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"] 
*/

function splitMessage10(message10, delimiter10) {
    let words10;
    words10 = message10.split(delimiter10);
    // return words;
    console.log(words10);
}
splitMessage10('Mango hurries to the train', ' ');
// [ 'Mango', 'hurries', 'to', 'the', 'train' ]
splitMessage10('Mango', '');
// [ 'M', 'a', 'n', 'g', 'o' ]
splitMessage10('best_for_week', '_');
// [ 'best', 'for', 'week' ]

// 2.11
console.log('');
console.log('~~~ Task 2.11 ~~~');
console.log('');
// Задача 11

/* Задача: гравировка украшений
Задание
Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов
и цены за слово. Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку,
состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
Тесты
Объявлена функция calculateEngravingPrice(message, pricePerWord)
Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80
 */

function calculateEngravingPrice11(message11, pricePerWord11) {
    // Change code below this line
    let price11;
    const words11 = message11.split(' ');
    const messageArrayLength11 = words11.length;
    price11 = messageArrayLength11 * pricePerWord11;
    console.log(price11);
    // Change code above this line
}
calculateEngravingPrice11('Well done!', 10);
// 20
calculateEngravingPrice11('Web-development is creative work', 20);
// 80
calculateEngravingPrice11('Web-development is creative work', 40);
// 100

// 2.12
// Задача 12
console.log('');
console.log('~~~ Task 2.12 ~~~');
console.log('');

/* Метод массива join()
Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы 
будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная 
методу строк split(delimeter).
const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'
Задание
Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения
элементов массива array c разделителем delimeter - строку.
Тесты
Объявлена функция makeStringFromArray(array, delimeter)
Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "")) возвращает "Mango"
Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"
*/

function makeStringFromArray12(array12, delimiter12) {
    let string12;
    string12 = array12.join(delimiter12);
    // return string;
    console.log(string12);
}
makeStringFromArray12(['Mango', 'hurries', 'to', 'the', 'train'], ' ');
// Mango hurries to the train
makeStringFromArray12(['M', 'a', 'n', 'g', 'o'], '');
// Mango
makeStringFromArray12(['top', 'pics', 'for', 'you'], '_');
// top_pics_for_you

// 2.13
console.log('');
console.log('~~~ Task 2.13 ~~~');
console.log('');
/* Задача 13 : генератор slug
Задание
Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.
Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи.
В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.
Внимание
Slug это всегда строка в нижнем регистре, слова которой разделены тире.
Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире
Тесты
Объявлена функция slugify(title)
Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
Вызов slugify("English for developer") возвращает "english-for-developer"
Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"
 */

function slugify13(title13) {
    const slugify13 = title13.toLowerCase().split(' ').join('-');
    // return slugify;
    console.log(slugify13);
}
slugify13('Arrays for begginers');
// arrays-for-begginers
slugify13('English for developer');
// english-for-developer
slugify13('Ten secrets of JavaScript');
// ten - secrets - of - javascript;
slugify13('How to become a JUNIOR developer in TWO WEEKS');
// how-to-become-a-junior-developer-in-two-weeks

// 2.14
console.log('');
console.log('~~~ Task 2.14 ~~~');
console.log('');
//  Задача 14

/*Метод slice()
Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его.
Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.
Если begin и end не указаны, будет создана полная копия исходного массива.
Если не указан end, копирование будет от start и до конца исходного массива.
Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']
Задание
Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов
Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
Объявлена переменная firstTwoEls
Значение переменной firstTwoEls это массив ["apple", "plum"]
Объявлена переменная nonExtremeEls
Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
Объявлена переменная lastThreeEls
Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами
*/

const fruits14 = ['apple14', 'plum14', 'pear14', 'orange14', 'banana14'];
const firstTwoEls14 = fruits14.slice(0, -3);
const nonExtremeEls14 = fruits14.slice(1, -1);
const lastThreeEls14 = fruits14.slice(-3);
console.log(firstTwoEls14);
// [ 'apple14', 'plum14' ]
console.log(nonExtremeEls14);
// [ 'plum14', 'pear14', 'orange14' ]
console.log(lastThreeEls14);
// [ 'pear14', 'orange14', 'banana14' ]

// 2.15
console.log('');
console.log('~~~ Task 2.15 ~~~');
console.log('');
//  Задача 15

/* Метод concat()
Метод concat используется для объединения двух или более массивов. Он не изменяет массив на котором вызывается, а возвращает новый.
Порядок аргументов метода влияет на порядок элементов нового массива.
const firstArray = ["Mercury", "Venus", "Earth"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Uranus", "Neptune"];
const allPlanets = firstArray.concat(secondArray, thirdArray);
console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
Задание
Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
Тесты
Объявлена переменная oldClients
Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
Объявлена переменная newClients
Значение переменной newClients это массив ["Peach", "Houston"]
Объявлена переменная allClients
Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
Переменной allClients присвоен массив после применения метода concat с правильными аргументами
 */

const oldClients15 = ['Mango15', 'Ajax15', 'Poly15', 'Kiwi15'];
const newClients15 = ['Peach15', 'Houston15'];
const allClients15 = oldClients15.concat(newClients15);
console.log(allClients15);
// [ 'Mango15', 'Ajax15', 'Poly15', 'Kiwi15', 'Peach15', 'Houston15' ]

// 2.16
console.log('');
console.log('~~~ Task 2.16 ~~~');
console.log('');
// Задача 16: композиция массивов

/*Задание
Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных
firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива. Если количество элементов нового
массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
В противном случае функция должна вернуть новый массив целиком.
Тесты
Объявлена функция makeArray(firstArray, secondArray, maxLength)
Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив
 */

function makeArray16(firstArray16, secondArray16, maxLength16) {
    let slicedArray16;
    newArray16 = firstArray16.concat(secondArray16);
    if (newArray16.length > maxLength16) {
        // return newArray.slice(0, maxLength);
        slicedArray16 = newArray16.slice(0, maxLength16);
    }
    // return newArray;
    else {
        slicedArray16 = firstArray16.concat(secondArray16);
    }
    console.log(slicedArray16);
}
makeArray16(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// ['Mango', 'Poly', 'Ajax']
makeArray16(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
// ['Mango', 'Poly', 'Houston', 'Ajax']
makeArray16(['Mango'], ['Ajax', 'Chelsea', 'Poly'], 3);
// ['Mango', 'Ajax', 'Chelsea']
makeArray16(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
// ['Earth', 'Jupiter']
makeArray16(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
// ['Earth', 'Jupiter', 'Neptune', 'Uranus']
makeArray16(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);
// []

// 2.17
console.log('');
console.log('~~~ Task 2.17 ~~~');
console.log('');
//  Задача 17

/* Цикл for
Циклы используются для многократного повторения кода. Объявление цикла for состоит из трёх выражений.
for (Инициализация; Условие; Пост - выражение) {
  // Тело цикла
}
Инициализация - выполняется один раз перед началом цикла. Используется для создания переменной-счётчика и указания её начального значения.
Условие - выражение, оцениваемое перед каждой итерацией (повторением) цикла.
Тело цикла выполняется только тогда, когда выражение приводится к true.
Цикл завершается, если значение будет false.
Пост-выражение - выполняется в конце каждого повторения цикла, перед проверкой условия. Используется для обновления переменной-счётчика.
Тело - набор инструкций для выполнения на каждом повторении. Выполняется, если выражение условия приводится к true.
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
В примере объявляется переменная i, инициализируется значением 0 и цикл выполняется (его тело) до тех пор, пока i <= 20,
то есть условие приводится к true. После каждой итерации счётчик увеличивается на 5.
Задание
Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
Тесты
Объявлена переменная start
Значение переменной start это число 3
Объявлена переменная end
Значение переменной end это число 7
Объявлена переменная i - счётчик цикла
Начальное значение переменной i равно 3
Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
На каждой итерации значение переменной i увеличивается на единицу
Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7
 */

const start = 3;
const end = 7;
for (let i = start; i <= end; i += 1) {
    console.log(i);
}
// 3
// 4
// 5
// 6
// 7

// 2.18
console.log('');
console.log('~~~ Task 2.18 ~~~');
console.log('');
// Задача 18: сумма чисел (цикл for)

/*
Задание
Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы
и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
Тесты
Объявлена функция calculateTotal(number)
Вызов функции calculateTotal(1) возвращает 1
Вызов функции calculateTotal(3) возвращает 6
Вызов функции calculateTotal(7) возвращает 28
Вызов функции calculateTotal(18) возвращает 171
Вызов функции calculateTotal(24) возвращает 300
Вызов функции calculateTotal() со случайным числом возвращает правильное значение
*/

function calculateTotal18(number18) {
    let total18 = 0;
    for (let i = 0; i <= number18; i += 1) {
        total18 += i;
    }
    // return total;
    console.log(total18);
}
calculateTotal18(0);
// 0
calculateTotal18(1);
// 1
calculateTotal18(2);
// 3
calculateTotal18(3);
// 6
calculateTotal18(4);
// 10
calculateTotal18(5);
// 15

// 2.19
console.log('');
console.log('~~~ Task 2.19 ~~~');
console.log('');
//  Задача 19

/* Итерация по массиву
Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.
const planets = ["Earth", "Mars", "Venus"];
for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - 
это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.
Задание
Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
Объявлена переменная i - счётчик цикла
Начальное значение переменной i равно 0
Условие цикла приводится к true до тех пор, пока i меньше 4
На каждой итерации значение переменной i увеличивается на единицу
В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
В теле цикла for используется вывод в консоль переменной fruit
*/

const fruits19 = ['apple', 'plum', 'pear', 'orange'];
for (let i = 0; i < fruits19.length; i += 1) {
    const fruit19 = fruits19[i];
    console.log(fruit19);
}
// apple
// plum
// pear
// orange

// 2.20
console.log('');
console.log('~~~ Task 2.20 ~~~');
console.log('');
//  Задача 20: подсчёт суммы покупки

/*
Задание
Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
Тесты
Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение 
*/

function calculateTotalPrice20(order) {
    let total20 = 0;
    for (let i = 0; i < order.length; i += 1) {
        total20 += order[i];
    }
    // return total;
    console.log(total20);
}
calculateTotalPrice20([0]);
// 0
calculateTotalPrice20([1]);
// 1
calculateTotalPrice20([1, 2]);
// 3

// 2.21
console.log('');
console.log('~~~ Task 2.21 ~~~');
console.log('');
// Задача 21: поиск самого длинного слова

/*
Задание
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из 
слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
Тесты
Объявлена функция findLongestWord(string)
Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
Вызов функции findLongestWord("Google do a roll") возвращает Google
Вызов функции findLongestWord("May the force be with you") возвращает force
Вызов функции findLongestWord() со случайной строкой возвращает правильное значение 
*/

function findLongestWord21(string21) {
    let stringSplit21 = string21.split(' ');
    let longestWord21 = stringSplit21[0];
    for (let i = 0; i < stringSplit21.length; i += 1) {
        if (stringSplit21[i].length > longestWord21.length) {
            longestWord21 = stringSplit21[i];
        }
    }
    // return longestWord;
    console.log(longestWord21);
}
findLongestWord21(`How to become a JUNIOR developer in TWO WEEKS`);
// developer

// 2.22
console.log('');
console.log('~~~ Task 2.22 ~~~');
console.log('');
// Задача 22

/* Метод push()
Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости 
указывать индексы добавляемых элементов.
const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
planets.push("Saturn", "Uranus", "Neptune");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
Задание
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых 
чисел от значения min до max.
Тесты
Объявлена функция createArrayOfNumbers(min, max)
Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
В цикле for использовался метод push */

function createArrayOfNumbers22(min, max) {
    const numbers22 = [];
    for (let i = min; i <= max; i += 1) {
        numbers22.push(i);
    }
    // return numbers;
    console.log(numbers22);
}
createArrayOfNumbers22(-5, 3);
// [ -5, -4, -3, -2, -1, 0,  1,  2,  3 ]
createArrayOfNumbers22(0, 0);
// [ 0 ]
createArrayOfNumbers22(0, 1);
// [ 0, 1 ]
createArrayOfNumbers22(0, 2);
// [ 0, 1, 2 ]
createArrayOfNumbers22(1, 1);
// [ 1 ]
createArrayOfNumbers22(1, 2);
// [ 1, 2 ]
createArrayOfNumbers22(1, 3);
// [ 1, 2, 3 ]
createArrayOfNumbers22(1, 3.5);
// [ 1, 2, 3 ]
createArrayOfNumbers22(0, 5);
// [ 0, 1, 2, 3, 4, 5 ]
createArrayOfNumbers22(10, 5);
// []

// 2.23
console.log('');
console.log('~~~ Task 2.23 ~~~');
console.log('');
// Задача 23: фильтрация массива чисел

/*Задание
Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив,
в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
Тесты
Объявлена функция filterArray(numbers, value)
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
В цикле for использовался метод push 
*/

function filterArray23(numbers23, value23) {
    const array23 = [];
    for (const number23 of numbers23) {
        if (number23 > value23) {
            array23.push(number23);
        }
    }
    // return array;
    console.log(array23);
}
filterArray23([1, 2, 3, 4, 5], 3);
// [ 4, 5 ]
filterArray23([1, 2, 3, 4, 5], 4);
// [ 5 ]
filterArray23([12, 24, 8, 41, 76], 38);
// [ 41, 76 ]
filterArray23([12, 24, 8, 41, 76], 20);
// [ 24, 41, 76 ]

// 2.24
console.log('');
console.log('~~~ Task 2.24 ~~~');
console.log('');
// Задача 24

/* Метод includes()
Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно.
Область применения этого метода сводится к ситуациям, когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).
const planets = ["Earth", "Mars", "Venus"];
console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false
Задание
Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
Дополни код функции так, что если:
фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.
Тесты
Объявлена функция checkFruit(fruit)
Вызов checkFruit("plum") возвращает true
Вызов checkFruit("mandarin") возвращает false
Вызов checkFruit("pear") возвращает true
Вызов checkFruit("Pear") возвращает false
Вызов checkFruit("apple") возвращает true
Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean
В функции использовался метод includes
*/

function checkFruit24(fruit24) {
    const fruits24 = ['apple', 'plum', 'pear', 'orange'];
    // return fruits.includes(fruit);
    console.log(fruits24.includes(fruit24));
}
checkFruit24(`apple`);
// true
checkFruit24(`lemon`);
// false

// 2.25
console.log('');
console.log('~~~ Task 2.25 ~~~');
console.log('');
// Задача 25: общие элементы

/*
Задание
Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют
в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в 
параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют 
в обоих исходных массивах.
Тесты
Объявлена функция getCommonElements(array1, array2)
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
В цикле for использовались методы includes и push
 */

function getCommonElements25(array125, array225) {
    let arrayNew25 = [];
    for (let i = 0; i < array125.length; i += 1) {
        if (array225.includes(array125[i])) arrayNew25.push(array125[i]);
    }
    // return arrayNew;
    console.log(arrayNew25);
}
getCommonElements25([1, 2, 3], [2, 4]);
// [ 2 ]
getCommonElements25([1, 2, 3], [2, 1, 17, 19]);
// [ 1, 2 ]
getCommonElements25([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// [ 12, 27, 3 ]
getCommonElements25([10, 20, 30, 40], [4, 30, 17, 18, 40]);
// [ 30, 40 ]
getCommonElements25([1, 2, 3], [10, 20, 30]);
// []

// 2.26
console.log('');
console.log('~~~ Task 2.26 ~~~');
console.log('');
// Задача 26

/*
Задание
Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
Тесты
Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice([]) возвращает 0
Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму */

function calculateTotalPrice26(order26) {
    let total26 = 0;
    for (const oneOrder26 of order26) {
        total26 += oneOrder26;
    }
    // return total;
    console.log(total26);
}
calculateTotalPrice26([]);
// 0
calculateTotalPrice26([0]);
// 0
calculateTotalPrice26([1]);
// 1
calculateTotalPrice26([1, 2]);
// 3
calculateTotalPrice26([1, 5, 15]);
// 21

// 2.27
console.log('');
console.log('~~~ Task 2.27 ~~~');
console.log('');
// Задача 27: фильтрация массива чисел 2.0

/*
Задание
Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
Тесты
Объявлена функция filterArray(numbers, value)
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]*/

function filterArray27(numbers27, value27) {
    const filteredNumbers27 = [];
    for (let number27 of numbers27) {
        if (number27 > value27) {
            filteredNumbers27.push(number27);
        }
    }
    // return filteredNumbers;
    console.log(filteredNumbers27);
}
filterArray27([1, 2, 3, 4, 5], 3);
// [ 4, 5 ]
filterArray27([1, 2, 3, 4, 5], 4);
// [ 5 ]
filterArray27([1, 2, 3, 4, 5], 5);
// []
filterArray27([1, 2, 3, 4, 5], 3);
// [ 4, 5 ]
filterArray27([12, 24, 8, 41, 76], 38);
// [ 41, 76 ]
filterArray27([12, 24, 8, 41, 76], 20);
// [ 24, 41, 76 ]

// 2.28
console.log('');
console.log('~~~ Task 2.28 ~~~');
console.log('');
// Задача 28

/*
Задание
Дополни выражения остатка от деления так, чтобы код проходил тесты.
const a = 3 % ;
const b = 4 % ;
const c = 11 % ;
const d = 12 % ;
const e = 8 % ;
Объявлена переменная a
Значение переменной a это число 0
Объявлена переменная b
Значение переменной b это число 1
Объявлена переменная c
Значение переменной c это число 3
Объявлена переменная d
Значение переменной d это число 5
Объявлена переменная e
Значение переменной e это число 2
*/

const a = 3 % 1;
console.log(a);
// 0
const b = 4 % 3;
console.log(b);
// 1
const c = 11 % 4;
console.log(c);
// 3
const d = 12 % 7;
console.log(d);
// 5
const e = 8 % 3;
console.log(e);
// 2

// 2.29
console.log('');
console.log('~~~ Task 2.29 ~~~');
console.log('');
// Задача 29: чётные числа

/*
Задание
Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных 
чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).
Тесты
Объявлена функция getEvenNumbers(start, end)
Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
Вызов функции getEvenNumbers(8, 8) возвращает [8]
Вызов функции getEvenNumbers(7, 7) возвращает []
Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив
*/

function getEvenNumbers29(start29, end29) {
    let evenNumbers29 = [];
    for (let i = start29; i <= end29; i += 1) {
        if (i % 2 === 0) {
            evenNumbers29.push(i);
        }
    }
    // return evenNumbers;
    console.log(evenNumbers29);
}
getEvenNumbers29(2, 5);
// [ 2, 4 ]
getEvenNumbers29(3, 11);
// [ 4, 6, 8, 10 ]
getEvenNumbers29(6, 12);
// [ 6, 8, 10, 12 ]
getEvenNumbers29(8, 8);
// [ 8 ]
getEvenNumbers29(7, 7);
// []

// 2.30
console.log('');
console.log('~~~ Task 2.30 ~~~');
console.log('');
// Задача 30

/* Оператор break
Прервать выполнение цикла можно в любой момент. Для этого существует оператор break, который полностью прекращает выполнение цикла
и передаёт управление на строку за его телом. В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё выполнение
(будет прерван).
for (let i = 0; i <= 5; i += 1) {
  console.log(i);
  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}
console.log("Лог после цикла");
Задание
Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
Тесты
Объявлена переменная start со значением 6
Объявлена переменная end со значением 27
Объявлена переменная number без инициализации
Итоговое значение переменной number равно 10
В цикле for используется break для выхода до завершения всех итераций цикла
*/

const start30 = 6;
const end30 = 27;
let number30;
for (let i = start30; i < end30; i += 1) {
    if (i % 5 === 0) {
        number30 = i;
        break;
    }
    if (number30 === 10) break;
}
console.log(number30);
// 10

// 2.31
console.log('');
console.log('~~~ Task 2.31 ~~~');
console.log('');
// Задача 31

/* Оператор break vs return в функции
Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а только прервёт цикл.
Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return.
В примере ищем число 3. Как только выполнится условие if, делаем возврат, который прервёт выполнение цикла и функции.
function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);
    if (i === 3) {
      console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
      return i;
    }
  }
  // Этот console.log не выполнится
  console.log("Лог после цикла в теле функции");
}
Задание
Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
возвращала первое число от start до end, которое делится на divisor без остатка
не использовав оператор break не использовав переменную number
Тесты
Объявлена функция findNumber(start, end, divisor)
Вызов findNumber(2, 6, 5) возвращает 5
Вызов findNumber(8, 17, 3) возвращает 9
Вызов findNumber(6, 9, 4) возвращает 8
Вызов findNumber(16, 35, 7) возвращает 21
Вызов findNumber() со случайным набором чисел возвращает верный результат
В цикле for не должен использоваться break для выхода до завершения всех итераций цикла
*/

function findNumber31(start31, end31, divisor31) {
    let number31 = [];
    for (let i = start31; i < end31; i += 1) {
        if (i % divisor31 === 0) {
            number31.push(i);
        }
    }
    // return number[0];
    console.log(number31[0]);
}
findNumber31(2, 6, 5);
// 5
findNumber31(8, 17, 3);
// 9
findNumber31(6, 9, 4);
// 8
findNumber31(16, 35, 7);
// 21

// 2.32
console.log('');
console.log('~~~ Task 2.32 ~~~');
console.log('');
// Задача 32: функция includes()
/* 
Задание
Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - 
проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
Тесты
Объявлена функция includes(array, value)
Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
Вызов includes() для случайного массива со случайным value возвращает верный boolean
В функции includes используется for, return, но не метод массива includes */

function includes32(array32, value32) {
    for (const element32 of array32) {
        if (element32 === value32) {
            return true;
        }
    }

    return false;
}

console.log(includes32([1, 2, 3, 4, 5], 3));
console.log(includes32([1, 2, 3, 4, 5], 17));
console.log(includes32(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
console.log(includes32(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'));
console.log(includes32(['apple', 'plum', 'pear', 'orange'], 'plum'));
console.log(includes32(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
