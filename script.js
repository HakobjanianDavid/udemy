'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "")
    }
}

start();

let appData = {
    budjet: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};


function chooseExpenses() {
    for(let i=0; i<2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = +prompt('Во сколько обойдется?');
    
        if( (typeof(a)) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50){
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}

chooseExpenses();



// Циклы
// Cycle with "for"
// for(let i=0; i<2; i++){
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = +prompt('Во сколько обойдется?');

//     if( (typeof(a)) === 'string' && typeof(a) != null && typeof(b) != null 
//         && a != '' && b != '' && a.length < 50){
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i = i - 1;
//     }
// };

// Cycle with "do...while"

// let d = 0;

// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = +prompt('Во сколько обойдется?');
    
//     appData.expenses[a] = b;
//     d++;
// } while (d < 2);

// Cycle with "while "

// let g = 0;

// while (g < 2){
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = +prompt('Во сколько обойдется?');
    
//     appData.expenses[a] = b;
//     g++;
// };

console.log(appData);

appData.moneyPerday = (appData.budjet / 30).toFixed();

alert("Бюджет на день: " + appData.moneyPerday);

// Conditions

if(appData.moneyPerday < 100){
    console.log("Minimun")
} else if(appData.moneyPerday < 100 && appData.moneyPerday < 2000){
    console.log("sredni")
} else if(appData.moneyPerday > 2000){
    console.log("hight  level")
} else {
    console.log("I don't know")
};

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.mounthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.mounthIncome);
    }
}

checkSavings();




