'use strict';

let money = prompt("Ваш бюджет на месяц?", "12000"),
    time = prompt('Введите дату в формате YYYY-MM-DD', '1997-01-08');
let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt ('Введите обязательную статью расходов в этом месяце', 'food'),
        b = +prompt ('Во сколько это обойдется?', '12');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(a) != null
        && a != "" && b != "" && a.length < 50) {
        console.log('done')
        appData.expenses[a] = b;
    } else {
        i--;
    } 
}

appData.moneyPerDay = appData.budjet/30;

alert('Ваш бюджет на день равен ' + appData.moneyPerDay);

if(appData.moneyPerDay < 1000) {
    console.log('Minimum')
} else if(appData/moneyPerDay > 1000 && appData.moneyPerDay < 10000) {
    console.log('midle')
} else if (appData.moneyPerDay > 10000){
    console.log('hight')
} else {
    console.log('Произошла ошибка!')
}

console.log(appData);