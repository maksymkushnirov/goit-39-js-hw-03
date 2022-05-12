// goit-39-js-hw-03
console.log('');
console.log('~~~ goit-39-js-hw-03 ~~~');
console.log('');

// 3.1

console.log('');
console.log('~~~ Task 3.1 ~~~');
console.log('');

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
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
    [emailInputName]: 'henry.carter@aptmail.com',
    [passwordInputName]: 'jqueryismyjam',
};

// 3.10
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
const apartment15 = {
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
};
const keys15 = Object.keys15(apartment15);
const values15 = Object.values15(apartment15);

// 3.16
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
console.log(calculateTotalPrice('Radar'));
console.log(calculateTotalPrice('Droid'));
console.log(calculateTotalPrice('Grip'));
console.log(calculateTotalPrice('Scanner'));

// 3.21
const highTemperatures21 = {
    yesterday21: 28,
    today21: 26,
    tomorrow21: 33,
};
const { yesterday21, today21, tomorrow21 } = highTemperatures21;
const meanTemperature21 = (yesterday21 + today21 + tomorrow21) / 3;

// 3.22
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
console.log(
    calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }),
);

// 3.27
const scores27 = [89, 64, 42, 17, 93, 51, 26];
const bestScore27 = Math.max(...scores27);
const worstScore27 = Math.min(...scores27);

// 3.28
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// 3.29
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
function makeTask(data) {
    const completed = false;
    const category = 'General';
    const priority = 'Normal';
    const object = { completed, priority, category, ...data };
    return object;
}
console.log(makeTask({}));
console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
console.log(makeTask({ text: 'Buy bread' }));

// 3.31
function add(...args) {
    totalSum = 0;
    for (arg of args) {
        totalSum += arg;
    }
    return totalSum;
}
console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));

// 3.32
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
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// 3.33
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
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// 3.34
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
const bookShelf35 = {
    books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
    updateBook(oldName, newName) {
        const bookIndex = this.books.indexOf(oldName);
        this.books.splice(bookIndex, 1, newName);
        return this.books;
    },
};

// 3.36
const atTheOldToad36 = {
    // Change code below this line

    potions: [],

    // Change code above this line
};

// 3.37
const atTheOldToad37 = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    getPotions() {
        return this.potions;
    },
};

// 3.38
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
const atTheOldToad40 = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    updatePotionName(oldName, newName) {
        const indexOfElement = this.potions.indexOf(oldName);
        this.potions.splice(indexOfElement, 1, newName);
    },
};

// 3.41
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
