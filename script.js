'use strict'

let money, time;

function start (){
    money = +prompt("Ваш бюджет на месяц?", "12000");
    time = prompt('Введите дату в формате YYYY-MM-DD', '1997-01-08');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "12000");
    }
}

start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudjet: function() {
        appData.moneyPerDay = (appData.budjet/30).toFixed();
        alert('Ваш бюджет на день равен ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 1000) {
            console.log('Minimum')
        } else if(appData/moneyPerDay > 1000 && appData.moneyPerDay < 10000) {
            console.log('midle')
        } else if (appData.moneyPerDay > 10000){
            console.log('hight')
        } else {
            console.log('Произошла ошибка!')
        }  
    },
    checkSavings: function() {
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?", "1500"),
                percent = +prompt("Под какой процент", "50");

            appData.mounthInCome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.mounthInCome);
       }       
    },
    chooseOptExpenses: function(){
        for(let i=1; i<=3; i++) {
            let ans = prompt("Статья необязательных расходов", "");
            
            while(ans == "" || ans == null) {
                ans = prompt("Статья необязательных расходов", "");
            }
            appData.optionalExpenses[i] = ans;
        }
    },
    chooseIncome: function(){
        for(let i=0; i<1; i++){
            let items = prompt ("Что принесет доп доход? (Перечислите через запятую)", 
            "Подработка, чаевые");
            
            if(typeof(items) === 'string' && typeof(items) != null && items != ""){
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что то еще?", ""));
                appData.income.sort();
                
                appData.income.forEach(function (item, ind, mass) {
                    ind++;
                    alert (ind + ' Способ доп. заработка: ' + item);
                });
            } else {
                i--;
            }
        }
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + appData[key]);
}

appData.chooseIncome();

