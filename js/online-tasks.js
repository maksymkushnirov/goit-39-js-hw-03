// goit-39-js-hw-03
console.log('');
console.log('~~~ goit-39-js-hw-03 ~~~');
console.log('');

// 3.1
console.log('');
console.log('~~~ Task 3.1 ~~~');
console.log('');

/* Создание объекта
Объекты позволяют описать и сгруппировать характеристики объектов реального мира - пользователя, книги, продукта магазина, чего угодно. Объекты ещё называют словарями, то есть они содержат термины (свойства) и их определения (значения).
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};
Для объявления используются фигурные скобки {} - литерал объекта. При создании объекту можно добавить свойства, каждое из которых описывается парами ключ:значение. Ключ ещё называют именем свойства и это всегда строка. Значением свойства могут быть любые типы: примитивы, массивы, объекты, були, функции и т. п. Свойства разделяются запятой.
Задание
Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:
imgUrl - фотография, значение "https://via.placeholder.com/640x480";
descr - описание, значение "Spacious apartment in the city center";
rating - рейтинг, значение 4;
price - цена, значение 2153;
tags - метаинформация, массив ["premium", "promoted", "top"].
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
В объекте есть свойство imgUrl
Значение свойства imgUrl это строка "https://via.placeholder.com/640x480"
В объекте есть свойство descr
Значение свойства descr это строка "Spacious apartment in the city center"
В объекте есть свойство rating
Значение свойства rating это число 4
В объекте есть свойство price
Значение свойства price это число 2153
В объекте есть свойство tags
Значение свойства tags это массив ["premium", "promoted", "top"]*/

const apartment1 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
};

// 3.2
console.log('');
console.log('~~~ Task 3.2 ~~~');
console.log('');

/* Вложенные свойства
Значением свойства может быть другой объект. Это используется для хранения вложенных 
и группированных данных. Например, статистика пользователя социальной сети состоит из 
количества последователей, просмотров и лайков, и хранить эти данные удобнее всего в 
виде объекта. Тоже самое с местоположением, отдельно страна и город. В будущем это можно
будет использовать для поиска пользователей по стране, городу, минимальному или максимальному 
количеству последователей и т. д.
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
Задание
Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. 
Добавь ему следующие свойства:
name - имя владельца, значение "Henry";
phone - телефон, значение "982-126-1588";
email - почта, значение "henry.carter@aptmail.com".
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями
В объекте apartment есть свойство owner
Значение свойства owner это объект
В объекте owner есть свойство name
Значение свойства name это "Henry"
В объекте owner есть свойство phone
Значение свойства phone это "982-126-1588"
В объекте owner есть свойствао email
Значение свойства email это "henry.carter@aptmail.com" */

const apartment2 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
        name: 'Henry',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com',
    },
};

// 3.3
console.log('');
console.log('~~~ Task 3.3 ~~~');
console.log('');

/* Доступ к свойствам через точку
Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства. 
Синтаксис «через точку» используется в большинстве случаев и подходит тогда, когда мы 
заранее знаем имя (ключ) свойства к которому хотим получить доступ.
На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};
const bookTitle = book.title;
console.log(bookTitle); // "Последнее королевство"
const bookGenres = book.genres;
console.log(bookGenres); // ["историческая проза", "приключения"]
const bookPrice = book.price;
console.log(bookPrice); // undefined
Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями
Объявлена переменная aptRating
Значение переменной aptRating это число 4
Объявлена переменная aptDescr
Значение переменной aptDescr это строка "Просторная квартира в центре"
Объявлена переменная aptPrice
Значение переменной aptPrice это число 2153
Объявлена переменная aptTags
Значение переменной aptTags это массив строк ["premium", "promoted", "top"] */

const apartment3 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
};
const aptRating3 = apartment3.rating;
const aptDescr3 = apartment3.descr;
const aptPrice3 = apartment3.price;
const aptTags3 = apartment3.tags;

// 3.4
console.log('');
console.log('~~~ Task 3.4 ~~~');
console.log('');

/* Доступ к вложенным свойствам
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};
Для доступа к вложенным свойствам используется цепочка обращений «через точку». 
Например, если необходимо получить значение страны пользователя, записываем user.location.country,
где user.location это обращение (путь) к объекту в свойстве location, а user.locaton.country 
обращение к свойству country в этом объекте. То есть, «точка» указывает следующую вложенность.
const location = user.location;
console.log(location); // Объект location
const country = user.location.country;
console.log(country); // "Jamaica"
Если значение свойства это массив, то в нашем примере user.hobbies - обращение к этому массиву. 
Далее, можно получить доступ к его элементам через квадратные скобки и индекс или использовать свойства и методы.
const hobbies = user.hobbies;
console.log(hobbies); // ["swiming", "music", "sci-fi"]
const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swiming"
const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3
Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
ownerName - имя владельца;
ownerPhone - телефон владельца;
ownerEmail - почта владельца;
numberOfTags - количество элементов массива в свойстве tags;
firstTag - первый элемент массива в свойстве tags;
lastTag - последний элемент массива в свойстве tags.
Тесты
Объявлена переменная apartment с помощью "const"
Значение переменной apartment это объект
Объявлена переменная ownerName с помощью "const"
Значение переменной ownerName это строка "Henry"
Объявлена переменная ownerPhone с помощью "const"
Значение переменной ownerPhone это "982-126-1588"
Объявлена переменная ownerEmail с помощью "const"
Значение переменной ownerEmail это "henry.carter@aptmail.com"
Объявлена переменная numberOfTags с помощью "const"
Значение переменной numberOfTags это 3
Объявлена переменная firstTag с помощью "const"
Значение переменной firstTag это "premium"
Объявлена переменная lastTag с помощью "const"
Значение переменной lastTag это "top" */

const apartment4 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
        name: 'Henry',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com',
    },
};
const ownerName = apartment4.owner.name;
const ownerPhone = apartment4.owner.phone;
const ownerEmail = apartment4.owner.email;
const numberOfTags = apartment4.tags.length;
const firstTag = apartment4.tags[0];
const lastTag = apartment4.tags[2];

// 3.5
console.log('');
console.log('~~~ Task 3.5 ~~~');
console.log('');

/* Доступ к свойствам через квадратные скобки
Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]. 
Похоже на обращение к элементу массива с отличием в том, что в скобках указывается не индекс 
элемента, а имя свойства как строка.
Синтаксис «квадратных скобок» используется значительно реже. Как правило в случаях когда имя 
свойства заранее неизвестно или оно хранится в переменной (как значение параметра функции, например).
На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};
const bookTitle = book["title"];
console.log(bookTitle); 
// "Последнее королевство"
const bookGenres = book["genres"];
console.log(bookGenres); 
// ["историческая проза", "приключения"]
const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); 
// "Бернард Корнуэлл"
Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам 
обьекта apartment используя синтаксис «квадратных скобок».
aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Объявлена переменная aptRating
Значение переменной aptRating это 4
Объявлена переменная aptDescr
Значение переменной aptDescr это "Spacious apartment in the city centre"
Объявлена переменная aptPrice
Значение переменной aptPrice это 2153
Объявлена переменная aptTags
Значение переменной aptTags это ["premium", "promoted", "top"] */

const apartment5 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
};
const aptRating = apartment5['rating'];
const aptDescr = apartment5['descr'];
const aptPrice = apartment5['price'];
const aptTags = apartment5['tags'];

// 3.6
console.log('');
console.log('~~~ Task 3.6 ~~~');
console.log('');

/* Изменение значения свойства
После того, как объект создан, значение его свойств можно изменить. Для этого 
необходимо обратиться к ним по имени, например, «через точку», и присвоить новое значение.
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};
book.rating = 9;
book.public = false;
book.genres.push("драма");
console.log(book.rating); // 9
console.log(book.public); // false
console.log(book.genres); // ["историческая проза", "приключения", "драма"]
Задание
Дополни код обновив значения свойств объекта apartment:
цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на "Henry Sibola";
массив тегов в свойстве tags добавив в конец строку "trusted".
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Значение вложенного свойства price это число 5000
Значение вложенного свойства rating это число 4.7
Значение вложенного свойства name это строка "Henry Sibola"
Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"] */

const apartment6 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
        name: 'Henry',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com',
    },
};
apartment6.price = 5000;
apartment6.rating = 4.7;
apartment6.owner.name = 'Henry Sibola';
apartment6.tags.push('trusted');

// 3.7
console.log('');
console.log('~~~ Task 3.7 ~~~');
console.log('');

/* Добавление свойств
Операция добавления нового свойства после создания объекта ничем не отличается от 
изменения значения уже существующего свойства. Если при записи значения по имени, 
такого свойства в объекте нет, оно будет создано.
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38
};
book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]
Задание
Добавь объекту apartment несколько новых свойств:
area - площадь в квадратных метрах, число 60;
rooms - количество комнат, число 3;
location - местоположение квартиры, обьект со следующими вложенными свойствами;
country - страна, строка "Jamaica";
city - город, строка "Kingston".
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Значение вложенного свойства area это число 60
Значение вложенного свойства rooms это число 3
Значение вложенного свойства location это объект
Значение вложенного свойства location.country это строка "Jamaica"
Значение вложенного свойства location.city это строка "Kingston" */

const apartment7 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4.7,
    price: 5000,
    tags: ['premium', 'promoted', 'top', 'trusted'],
    owner: {
        name: 'Henry Sibola',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com',
    },
};
apartment7.area = 60;
apartment7.rooms = 3;
apartment7.location = {
    country: 'Jamaica',
    city: 'Kingston',
};

// 3.8
console.log('');
console.log('~~~ Task 3.8 ~~~');
console.log('');

/* Короткие свойства
Иногда, при создании объекта, значение свойства необходимо взять из переменной или
параметра функции с таким же именем, как и само свойство.
Синтксис в следующем примере слишком громоздкий, потому что приходится дублировать 
имя свойства и имя переменной, в которой хранится необходимое значение.
const name = "Генри Сибола";
const age = 25;
const user = {
  name: name,
  age: age
};
console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25
Синтаксис коротких свойств (shorthand properties) решает эту проблему, позволяя 
использовать имя переменной как имя свойства, а её значение как значение свойства.
const name = "Генри Сибола";
const age = 25;
const user = {
  name,
  age
};
console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25
То есть, при объявлении объекта достаточно указать только имя свойства, а значение 
будет взято из переменной с аналогичным именем.
Задание
Дополни код объявления объекта так, чтобы у него были свойства name, price, image и 
tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.
Тесты
Объявлена переменная product
Значение переменной product это объект
Значение вложенного свойства name это строка "Repair Droid"
Значение вложенного свойства price это число 2500
Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
Значение вложенного свойства tags это массив ["on sale","trending", "best buy"] */

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
    name,
    price,
    image,
    tags,
};

// 3.9
console.log('');
console.log('~~~ Task 3.9 ~~~');
console.log('');

/* Вычисляемые свойства
Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с именем, 
которое мы заранее не знаем, потому что оно хранится как значение переменной или как результат выполнения функции.
Раньше для этого необходимо было сначала создать объект, а потом добавлять свойства через 
квадратные скобки, что не совсем удобно.
const propName = "name";
const user = {
  age: 25
};
user[propName] = "Генри Сибола";
console.log(user.name); // "Генри Сибола"
Синтаксис вычисляемых свойств (computed properties) помогает избежать лишнего кода и в 
некоторых случаях упростить его. Значением вычисляемого свойства может быть любое валидное выражение.
const propName = "name";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола"
};
console.log(user.name); // "Генри Сибола"
Задание
Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: 
email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства 
password - строка "jqueryismyjam".
Тесты
Объявлена переменная credentials
Значение переменной credentials это объект
В объекте credentials есть свойство email
Значение вложенного свойства email это строка "henry.carter@aptmail.com"
В объекте credentials есть свойство password
Значение вложенного свойства password это строка "jqueryismyjam" */

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
    [emailInputName]: 'henry.carter@aptmail.com',
    [passwordInputName]: 'jqueryismyjam',
};

// 3.10
console.log('');
console.log('~~~ Task 3.10 ~~~');
console.log('');

/* Цикл for...in
В отличии от массива или строки, объект - это не итерируемая сущность, то есть его 
нельзя перебрать циклами for или for...of. Для перебора объектов используется специальный 
цикл for...in, который перебирает ключи объекта object.
for (key in object) {
  // инструкции
}
Переменная key доступная только в теле цикла. На каждой итерации в неё будет записано 
значение ключа (имя) свойства. Для того чтобы получить значение свойства с таким ключом 
(именем), используется синтаксис квадратных скобок.
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}
Задание
Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, 
а в массив values все значения его свойств.
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Объявлена переменная keys
Значение переменной keys это массив ['descr', 'rating', 'price']
Объявлена переменная values
Значение переменной values это массив ['Просторная квартира в центре', 4, 2153] */

const apartment10 = {
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
};
const keys10 = [];
const values10 = [];
for (const key10 in apartment10) {
    keys10.push(key10), values10.push(apartment10[key10]);
}

// 3.11
console.log('');
console.log('~~~ Task 3.11 ~~~');
console.log('');

/* Метод hasOwnProperty()
Разберём концепцию собственных и несобственных свойств объекта и научимся правильно использовать цикл for...in.
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';
console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4
Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. 
Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет в 
объекте dog - это несобственное свойство из объекта animal.
Оператор in, который используется в цикле for...in, не делает различия между собственными и 
несобственными свойствами объекта. Эта особенность мешает, так как мы всегда хотим перебрать 
только собственные свойства. Для того чтобы узнать есть в объекте собственное свойство или нет, 
используется метод hasOwnProperty(key), который возвращает true или false.
// ❌ Возвращает true для всех свойств
console.log('name' in dog); // true
console.log('legs' in dog); // true
// ✅ Возвращает true только для собственных свойств
console.log(dog.hasOwnProperty('name')); // true
console.log(dog.hasOwnProperty('legs')); // false
Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на 
собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, 
это оградит от возможных ошибок в будущем.
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
for (const key in book) {
  // Если это собственное свойство - выполняем тело if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }
  // Если это не собственное свойство - ничего не делаем
}
Задание
Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
Тесты
Объявлена переменная advert.
Значение переменной advert это объект.
Объявлена переменная apartment.
Значение переменной apartment это объект.
Объявлена переменная keys.
Значение переменной keys это массив ['descr', 'rating', 'price'].
Объявлена переменная values.
Значение переменной values это массив ['Просторная квартира в центре', 4, 2153] */

const keys11 = [];
const values11 = [];
const advert11 = {
    service: 'apt',
};
const apartment11 = Object.create(advert11);
apartment11.descr = 'Spacious apartment in the city center';
apartment11.rating = 4;
apartment11.price = 2153;

for (const key11 in apartment11) {
    if (apartment11.hasOwnProperty(key11)) {
        keys11.push(key11);
        values11.push(apartment11[key11]);
    }
}

// 3.12
console.log('');
console.log('~~~ Task 3.12 ~~~');
console.log('');

/* Задача. Подсчёт свойств
Задание
Напиши функцию countProps(object), которая считает и возвращает количество 
собственных свойств объекта в параметре object. Используй переменную propCount 
для хранения количества свойств объекта.
Тесты
Объявлена функция countProps(object)
Вызов countProps({}) возвращает 0
Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
Вызов countProps{ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
Функция подсчитывает только собственные свойства объекта */

function countProps12(object) {
    let propCount12 = 0;
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            propCount12++;
        }
    }
    // return propCount;
    console.log(propCount12);
}
countProps12({});
// 0
countProps12({ name: 'Mango', age: 2 });
// 2
countProps12({ mail: 'poly@mail.com', isOnline: true, score: 500 });
// 3

// 3.13
console.log('');
console.log('~~~ Task 3.13 ~~~');
console.log('');

/* Метод Object.keys()
У встроенного класса Object есть несколько полезных методов для работы с объектами. Первый из них это Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта, не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
const keys = Object.keys(book);
for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}
Мы перебираем массив ключей объекта и на каждой итерации получаем значение свойства с таким ключом.
Задание
Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
Тесты
Объявлена переменная apartment.
Значение переменной apartment это объект.
Объявлена переменная keys.
Значение переменной keys это массив ['descr', 'rating', 'price'].
Значение переменной keys получено с помощью метода Object.keys().
Объявлена переменная values.
Значение переменной values это массив ['Spacious apartment in the city centre', 4, 2153].
Значение переменной values получено с помощью цикла for...of */

const apartment13 = {
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
};
const values13 = [];
const keys13 = Object.keys(apartment13);
for (const key of keys13) {
    values13.push(apartment13[key]);
}

// 3.14
console.log('');
console.log('~~~ Task 3.14 ~~~');
console.log('');

/* Задача. Подсчёт свойств 2.0
Задание
Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.
Тесты
Объявлена функция countProps(object)
Вызов countProps({}) возвращает 0
Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
Функция подсчитывает только собственные свойства объекта
Функция использует метод Object.keys() и, возможно, цикл for...of */

function countProps14(object14) {
    let propCount14 = 0;
    const keys = Object.keys(object14);
    for (const key of keys) {
        {
            propCount14 += 1;
        }
    }
    // return propCount14;
    console.log(propCount14);
}
countProps14({});
// 0
countProps14({ name: 'Mango', age: 2 });
// 2
countProps14({ mail: 'poly@mail.com', isOnline: true, score: 500 });
// 3

// 3.15
console.log('');
console.log('~~~ Task 3.15 ~~~');
console.log('');

/* Метод Object.values()
Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то
метод Object.values(obj) возвращает массив значений его собственных свойств. 
Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "genres", "rating"]
const values = Object.values(book);
console.log(values); // ["Последнее королевство", "Бернард Корнуэлл", 8.38]
Массив значений свойств также можно перебрать циклом for...of, например для получения 
общей суммы числовых значений.
Задание
Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в 
переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().
Тесты
Объявлена переменная apartment
Значение переменной apartment это объект
Объявлена переменная keys
Значение переменной keys это массив ["descr", "rating", "price"]
Объявлена переменная values
Значение переменной values это массив ["Spacious apartment in the city centre", 4, 2153]
Для получения массива ключей объекта apartment используется Object.keys()
Для получения массива значений объекта apartment используется Object.values() */

const apartment15 = {
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
};
const keys15 = Object.keys15(apartment15);
const values15 = Object.values15(apartment15);

// 3.16
console.log('');
console.log('~~~ Task 3.16 ~~~');
console.log('');

/* Задача. Расходы на зарплату
Задание
Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, 
где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция 
должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную
totalSalary для хранения общей суммы зарплаты.
Тесты
Объявлена функция countTotalSalary(salaries)
Вызов countTotalSalary({}) возвращает 0
Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
Функция учитывает только собственные свойства объекта */

function countTotalSalary16(salaries16) {
    let totalSalary16 = 0;
    const values = Object.values(salaries16);
    for (const key16 of values) {
        totalSalary16 += key16;
    }
    // return totalSalary16;
    console.log(totalSalary16);
}
countTotalSalary16({});
// 0
countTotalSalary16({ mango: 100, poly: 150, alfred: 80 });
// 330
countTotalSalary16({ kiwi: 200, poly: 50, ajax: 150 });
// 400

// 3.17
console.log('');
console.log('~~~ Task 3.17 ~~~');
console.log('');

/* Массив объектов
В стандартный набор повседневных задач разработчика входит манипуляция массивом 
однотипных объектов. Это значит что все объекты в массиве гарантированно будут иметь 
одинаковый набор свойств, но с разными значениями.
const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];
Для перебора такого массива используется стандартный цикл for...of. Значения свойств 
каждого объекта можно получить используя синтаксис «через точку», так как в каждом 
объекте набор свойств и их имена будут одинаковые, отличаются только значения.
for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
Задание
Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors 
значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
Тесты
Объявлена переменная colors
Значение переменной colors это массив
Объявлена переменная hexColors
Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
Объявлена переменная rgbColors
Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"] */

const colors17 = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors17 = [];
const rgbColors17 = [];
for (const { hex, rgb } of colors) {
    hexColors17.push(hex);
    rgbColors17.push(rgb);
}

// 3.18
console.log('');
console.log('~~~ Task 3.18 ~~~');
console.log('');

/* Задача. Поиск объекта по значению свойства
Задание
Напиши функцию getProductPrice(productName) которая принимает один параметр 
productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) 
в массиве products и возвращает его цену (свойство price). Если продукт с таким названием 
не найден, функция должна возвращать null.
Тесты
Объявлена функция getProductPrice(productName).
Вызов getProductPrice("Radar") возвращает 1300.
Вызов getProductPrice("Grip") возвращает 1200.
Вызов getProductPrice("Scanner") возвращает 2700.
Вызов getProductPrice("Droid") возвращает 400.
Вызов getProductPrice("Engine") возвращает null */

const products18 = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice18(productName) {
    let productPrice = null;
    for (const product of products18) {
        if (product.name === productName) {
            productPrice = product.price;
        }
    }
    return productPrice;
}
console.log(getProductPrice18('Radar'));
// 1300
console.log(getProductPrice18('Scanner'));
// 2700
console.log(getProductPrice18('Droid'));
// 400
console.log(getProductPrice18('Engine'));
// null

// 3.19
console.log('');
console.log('~~~ Task 3.19 ~~~');
console.log('');

/* Задача. Коллекция значений свойства
Задание
Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - 
имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем 
из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция 
должна вернуть пустой массив.
Тесты
Объявлена функция getAllPropValues(propName)
Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
Вызов getAllPropValues("category") возвращает [] */

const products19 = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
    const propNames = [];
    for (const product of products19) {
        if (product[propName]) {
            propNames.push(product[propName]);
        }
    }
    return propNames;
}
console.log(getAllPropValues('name'));
// [ 'Radar', 'Scanner', 'Droid', 'Grip' ]
console.log(getAllPropValues('quantity'));
// [ 4, 3, 7, 9 ]
console.log(getAllPropValues('price'));
// [ 1300, 2700, 400, 1200 ]
console.log(getAllPropValues('category'));
// []

// 3.20
console.log('');
console.log('~~~ Task 3.20 ~~~');
console.log('');

/* Задача. Общая стоимость товара
Задание
Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
Тесты
Объявлена функция calculateTotalPrice(productName)
Вызов calculateTotalPrice("Blaster") возвращает 0
Вызов calculateTotalPrice("Radar") возвращает 5200
Вызов calculateTotalPrice("Droid") возвращает 2800
Вызов calculateTotalPrice("Grip") возвращает 10800
Вызов calculateTotalPrice("Scanner") возвращает 8100 */

const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    let totalCost = 0;
    for (let product of products) {
        if (product.name === productName) {
            totalCost = product.price * product.quantity;
        }
    }
    return totalCost;
}
console.log(calculateTotalPrice('Blaster'));
// 0
console.log(calculateTotalPrice('Radar'));
// 5200
console.log(calculateTotalPrice('Droid'));
// 2800
console.log(calculateTotalPrice('Grip'));
// 10800
console.log(calculateTotalPrice('Scanner'));
// 8100

// 3.21
console.log('');
console.log('~~~ Task 3.21 ~~~');
console.log('');

/* Деструктуризация объектов
Сложные данные всегда представлены объектом. Множественные обращения 
к свойствам объекта визуально загрязняют код.
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};
const accessType = book.public ? "публичном" : "закрытом";
const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
Деструктуризация позволяет «распаковать» значения свойств объекта в локальные переменные. 
Это делает код в месте их использования менее «шумным».
const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};
// Деструктуризируем
const { title, author, public, rating, coverImage } = book;
console.log(coverImage); // undefined
const accessType = public ? "публичном" : "закрытом";
const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
Деструктуризация всегда находится в левой части операции присвоения. 
Переменным внутри фигурных скобок присваиваются значения свойств объекта. Если имя переменной и
имя свойства совпадают, то происходит присваивание, в противном случае ей будет присвоено undefined. 
Порядок объявления переменных в фигурных скобках не важен.
Задание
Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня 
(meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией 
деструктуризации свойств объекта highTemperatures.
Тесты
Объявлена переменная highTemperatures
Значение переменной highTemperatures это объект
Объявлена переменная yesterday с помощью деструктуризации
Значение переменной yesterday это число 28
Объявлена переменная today с помощью деструктуризации
Значение переменной today это число 26
Объявлена переменная tomorrow с помощью деструктуризации
Значение переменной tomorrow это число 33
Объявлена переменная meanTemperature
Значение переменной meanTemperature это число 29
Используется синтаксис деструктуризации объекта highTemperatures */

const highTemperatures21 = {
    yesterday21: 28,
    today21: 26,
    tomorrow21: 33,
};
const { yesterday21, today21, tomorrow21 } = highTemperatures21;
const meanTemperature21 = (yesterday21 + today21 + tomorrow21) / 3;

// 3.22
console.log('');
console.log('~~~ Task 3.22 ~~~');
console.log('');

const highTemperatures22 = {
    yesterday22: 28,
    today22: 26,
    tomorrow22: 33,
};
const {
    yesterday22,
    today22,
    tomorrow22,
    icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures22;
const meanTemperature22 = (yesterday22 + today22 + tomorrow22) / 3;

// 3.23
console.log('');
console.log('~~~ Task 3.23 ~~~');
console.log('');

const highTemperatures23 = {
    yesterday23: 28,
    today23: 26,
    tomorrow23: 33,
};
const {
    yesterday23: highYesterday23,
    today23: highToday23,
    tomorrow23: highTomorrow23,
    icon: highIcon23 = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures23;
const meanTemperature23 = (highYesterday23 + highToday23 + highTomorrow23) / 3;

// 3.24
console.log('');
console.log('~~~ Task 3.24 ~~~');
console.log('');

const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
for (const { hex, rgb } of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
}

// 3.25
console.log('');
console.log('~~~ Task 3.25 ~~~');
console.log('');

const forecast = {
    today: {
        low: 28,
        high: 32,
        icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
        low: 27,
        high: 31,
    },
};
const {
    today: {
        high: highToday,
        low: lowToday,
        icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
    tomorrow: {
        high: highTomorrow,
        low: lowTomorrow,
        icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
} = forecast;

// 3.26
console.log('');
console.log('~~~ Task 3.26 ~~~');
console.log('');

function calculateMeanTemperature(forecast) {
    const {
        today: { low: todayLow, high: todayHigh },
        tomorrow: { low: tomorrowLow, high: tomorrowHigh },
    } = forecast;
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(
    calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }),
);
// 28.5
console.log(
    calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }),
);
// 37

// 3.27
console.log('');
console.log('~~~ Task 3.27 ~~~');
console.log('');

const scores27 = [89, 64, 42, 17, 93, 51, 26];
const bestScore27 = Math.max(...scores27);
const worstScore27 = Math.min(...scores27);

// 3.28
console.log('');
console.log('~~~ Task 3.28 ~~~');
console.log('');

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// 3.29
console.log('');
console.log('~~~ Task 3.29 ~~~');
console.log('');

const defaultSettings = {
    theme: 'light',
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
};
const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
};
const finalSettings = { ...defaultSettings, ...overrideSettings };

// 3.30
console.log('');
console.log('~~~ Task 3.30 ~~~');
console.log('');

function makeTask(data) {
    const completed = false;
    const category = 'General';
    const priority = 'Normal';
    const object = { completed, priority, category, ...data };
    return object;
}
console.log(makeTask({}));
// { completed: false, priority: 'Normal', category: 'General' }
console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// { completed: false, priority: 'Low', category: 'Homemade', text: 'Take out the trash' }
console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// { completed: false, priority: 'Normal', category: 'Finance', text: 'Take interest' }
console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// { completed: false, priority: 'Low', category: 'General', text: 'Choose shampoo' }
console.log(makeTask({ text: 'Buy bread' }));
// { completed: false, priority: 'Normal', category: 'General', text: 'Buy bread' }

// 3.31
console.log('');
console.log('~~~ Task 3.31 ~~~');
console.log('');

function add(...args) {
    totalSum = 0;
    for (arg of args) {
        totalSum += arg;
    }
    return totalSum;
}
console.log(add(15, 27));
// 42
console.log(add(12, 4, 11, 48));
// 75
console.log(add(32, 6, 13, 19, 8));
// 78
console.log(add(74, 11, 62, 46, 12, 36));
// 241

// 3.32
console.log('');
console.log('~~~ Task 3.32 ~~~');
console.log('');

function addOverNum(number, ...args) {
    let total = 0;

    for (const arg of args) {
        if (arg > number) {
            total += arg;
        }
    }

    return total;
}
console.log(addOverNum(50, 12, 27));
// 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// 71
console.log(addOverNum(15, 32, 6, 13, 19, 8));
// 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// 218

// 3.33
console.log('');
console.log('~~~ Task 3.33 ~~~');
console.log('');

function findMatches(numbers, ...args) {
    const matches = []; // Don't change this line
    for (let number of numbers) {
        if (args.includes(number)) {
            matches.push(number);
        }
    }
    // Change code above this line
    return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// [ 1, 2 ]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// [ 89, 17, 2 ]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// [ 24, 41, 9 ]
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
// []

// 3.34
console.log('');
console.log('~~~ Task 3.34 ~~~');
console.log('');

const bookShelf34 = {
    books: ['The last kingdom', 'The guardian of dreams'],
    getBooks() {
        return 'Returning all books';
    },
    addBook(bookName) {
        return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
        return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
        return `Updating book ${oldName} to ${newName}`;
    },
};

// 3.35
console.log('');
console.log('~~~ Task 3.35 ~~~');
console.log('');

const bookShelf35 = {
    books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
    updateBook(oldName, newName) {
        const bookIndex = this.books.indexOf(oldName);
        this.books.splice(bookIndex, 1, newName);
        return this.books;
    },
};

// 3.36
console.log('');
console.log('~~~ Task 3.36 ~~~');
console.log('');

const atTheOldToad36 = {
    // Change code below this line

    potions: [],

    // Change code above this line
};

// 3.37
console.log('');
console.log('~~~ Task 3.37 ~~~');
console.log('');

const atTheOldToad37 = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    getPotions() {
        return this.potions;
    },
};

// 3.38
console.log('');
console.log('~~~ Task 3.38 ~~~');
console.log('');

const atTheOldToad38 = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    addPotion(potionName) {
        this.potions.push(potionName);
    },
};

// 3.39
const atTheOldToad39 = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    removePotion(potionName) {
        const potionNameDelete = this.potions.indexOf(potionName);
        this.potions.splice(potionNameDelete, 1);
    },
};

// 3.40
console.log('');
console.log('~~~ Task 3.40 ~~~');
console.log('');

const atTheOldToad40 = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    updatePotionName(oldName, newName) {
        const indexOfElement = this.potions.indexOf(oldName);
        this.potions.splice(indexOfElement, 1, newName);
    },
};

// 3.41
console.log('');
console.log('~~~ Task 3.41 ~~~');
console.log('');

const atTheOldToad41 = {
    potions: [
        { name: 'Speed potion', price: 460 },
        { name: 'Dragon breath', price: 780 },
        { name: 'Stone skin', price: 520 },
    ],
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }
        this.potions.push(newPotion);
    },
    removePotion(potionName) {
        const { potions } = this;
        for (let i = 0; i < potions.length; i += 1) {
            const { name } = potions[i];
            if (potionName === name) {
                potions.splice(i, 1);
            }
        }
        return `Potion ${potionName} is not in inventory!`;
    },
    updatePotionName(oldName, newName) {
        for (let potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName;
                return;
            }
        }
        return `Potion ${oldName} is not in inventory!`;
    },
};
