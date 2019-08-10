'use strict';

let money = prompt("Ваш бюджет на месяц?", "12000"),
    time = prompt('Введите дату в формате YYYY-MM-DD', '1997-01-08'),
    first_answ = prompt ('Введите обязательную статью расходов в этом месяце', 'food'),
    second_answ = +prompt ('Во сколько это обойдется?', '12'),
    third_answ = prompt ('Введите обязательную статью расходов в этом месяце', 'TV'),
    fourth_answ = +prompt ('Во сколько это обойдется?', '500');
let appData = {
    money,
    timeData: time,
    expenses: {
        [first_answ] : second_answ,
        [third_answ] : fourth_answ
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData);
alert('Ваш бюджет на день равен ' + money/30);