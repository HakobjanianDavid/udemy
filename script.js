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
    savings: true
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


console.log(appData);

function detectedDayBudjet() {
    appData.moneyPerday = (appData.budjet / 30).toFixed();
    alert("Бюджет на день: " + appData.moneyPerday);
}

detectedDayBudjet();

// Conditions

function detectedLevel(){
    if(appData.moneyPerday < 100){
        console.log("Minimun")
    } else if(appData.moneyPerday < 100 && appData.moneyPerday < 2000){
        console.log("sredni")
    } else if(appData.moneyPerday > 2000){
        console.log("hight  level")
    } else {
        console.log("I don't know")
    };
}

detectedLevel();

function chooseOptExpenses() {
    for(let i=0; i<2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = +prompt('Во сколько обойдется?');
        if(typeof(a) == "string" && a !== "" && typeof(b) !== null && typeof(b) !== null 
        && a != '' && b != '' && a.length < 50) {
            console.log("done2")
            appData.optionalExpenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}



function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.mounthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.mounthIncome);
    }
}

checkSavings();




