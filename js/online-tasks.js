// solvings
// tests
// tasks'

// goit-39-js-hw-03
console.log('');
console.log('~~~ goit-39-js-hw-03 ~~~');
console.log('');

// 3.1
console.log('');
console.log('~~~ Task 3.1 ~~~');
console.log('');

const apartment1 = {
imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"]
};

// 3.2
console.log('');
console.log('~~~ Task 3.2 ~~~');
console.log('');

const apartment2 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
name: "Henry",
phone: "982-126-1588",
email: "henry.carter@aptmail.com",
},
};

// 3.3
const apartment3 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};
const aptRating3 = apartment3.rating;
const aptDescr3 = apartment3.descr;
const aptPrice3 = apartment3.price;
const aptTags3 = apartment3.tags;

// 3.4
const apartment4 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
const ownerName = apartment4.owner.name;
const ownerPhone = apartment4.owner.phone;
const ownerEmail = apartment4.owner.email;
const numberOfTags = apartment4.tags.length;
const firstTag = apartment4.tags[0];
const lastTag = apartment4.tags[2];

// 3.5
const apartment5 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};
const aptRating = apartment5["rating"];
const aptDescr = apartment5["descr"];
const aptPrice = apartment5["price"];
const aptTags = apartment5["tags"];

// 3.6
const apartment6 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment6.price = 5000;
apartment6.rating = 4.7;
apartment6.owner.name = "Henry Sibola";
apartment6.tags.push("trusted");

// 3.7
const apartment7 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment7.area = 60;
apartment7.rooms = 3;
apartment7.location = {
  country: "Jamaica",
  city: "Kingston"
};

// 3.8
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags
};

// 3.9
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
[emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam",
};

// 3.10
const apartment10 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys10 = [];
const values10 = [];
for (const key10 in apartment10) {
  keys10.push(key10),
  values10.push(apartment10[key10])
}

3.11
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
if (apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);}
}

3.12
function countProps(object) {
  let propCount = 0;
for (const key in object) {
     if (object.hasOwnProperty(key)) {
      propCount ++;  
         }
     }
  return propCount;
}

3.13
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);
for (const key of keys) {
values.push(apartment[key]);
}

3.14
function countProps(object) {
  let propCount = 0;
  const keys = Object.keys(object);
  for (const key of keys) {
  {
      propCount += 1;
    }
  }
  return propCount;
}

3.15
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment);
const values = Object.values(apartment);

3.16
function countTotalSalary(salaries) {
  let totalSalary = 0;
const values = Object.values(salaries);
  for(const key of values){
  totalSalary += key;}
  return totalSalary;
}

3.17
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
const hexColors = [];
const rgbColors = [];
for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);   }

3.18
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
for (const product of products) {
  if (product.name === productName) 
  {return product.price}}
return null;
}

3.19
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
  const propNames = [];
  for (const product of products) {
    if (product[propName]) {
      propNames.push(product[propName]);
    }
  }
  return propNames;
}

3.20
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
let totalCost = 0;
for (let product of products) {
  if (product.name === productName) {
    totalCost = product.price * product.quantity;}}
  return totalCost;
}

3.21
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {yesterday, today, tomorrow} = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

3.22
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {yesterday,
       today,
       tomorrow,
       icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

3.23const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {yesterday: highYesterday,
       today: highToday,
       tomorrow: highTomorrow,
       icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
= highTemperatures;
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

3.24
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
const hexColors = [];
const rgbColors = [];
for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

3.25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
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
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
  tomorrow: {
    high: highTomorrow,
    low: lowTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
} = forecast;

3.26
function calculateMeanTemperature(forecast) {
  const {
    today: {low: todayLow, high: todayHigh},
    tomorrow: {low: tomorrowLow, high: tomorrowHigh},
  } = forecast;
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

3.27
const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

3.28
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

3.29

3.30
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
const object = {completed, priority, category, ...data};
  return object;
}

3.31

3.32
function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
     if (arg > number)
     {total += arg;
  }}

  return total;
}

3.33

3.34
const bookShelf = {
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
  return `Deleting book ${bookName}`
  },
  updateBook(oldName, newName) {
  return `Updating book ${oldName} to ${newName}` }
};

3.35
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
const bookIndex = this.books.indexOf(oldName);
this.books.splice(bookIndex, 1, newName);
    return this.books;
  },
};

3.36

3.37
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  getPotions (potionName){
return this.potions}
};

3.38
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
this.potions.push(potionName);
  },
};

3.39
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
const potionNameDelete = this.potions.indexOf(potionName);
    this.potions.splice(potionNameDelete, 1);
  },
};

3.40
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
const indexOfElement = this.potions.indexOf(oldName);
this.potions.splice(indexOfElement, 1, newName)
  },
};

3.41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
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