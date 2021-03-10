const math = require('./node_modules/math/index.js');

// Основний масив з рандомними значеннями
const mainArray = [];
for (let i = 0; i < 20; i++) {
    mainArray[i] = getRandomNumber();
}

const minValue = math.getMin(mainArray),
    sumValues = math.getSum(mainArray),
    absNumber = math.getAbs(-20);

showMessage();

// функція генерації рандомного значення від 0 до 100
function getRandomNumber() {
    return Math.round(Math.random() * 100);
}

// функція виводить всі необхідні значення
function showMessage() {
    console.log(`Найменший елемент з масиву: ${minValue}`);
    console.log(`Сума всіх елементів масиву: ${sumValues}`);
    console.log(`Число по модулю: ${absNumber}`);
}