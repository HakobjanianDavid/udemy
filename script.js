'use strist'

let startBtn = document.getElementById('start'),
    income = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    incomeLavel = document.getElementsByClassName('level-value')[0],
    necessaryExpenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    additionalIncome = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName ('expenses-item'),
    approveExpenses = document.getElementsByTagName ('button')[0],
    approveOptionalExpenses = document.getElementsByTagName ('button')[1],
    calculateBudjet = document.getElementsByTagName ('button')[2],
    optionalExpensesItem = document.querySelectorAll ('.optionalexpenses-item'),
    chooseIncomeLabel = document.querySelector ('.choose-income'),
    checkSavings = document.querySelector ('#savings'),
    sumValue = document.querySelector ('.choose-sum'),
    percentValue = document.querySelector ('.choose-percent'),
    yearValue = document.querySelector ('.year-value'),
    monthValue = document.querySelector ('month-value'),
    dayValue = document.querySelector('day-value');

let money, time;

startBtn.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-MM-DD', '1997-01-08');
    money = +prompt("Ваш бюджет на месяц?", "12000");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "12000");
    }
    appData.budjet = money;
    appData.timeData = time;
    income.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
})

approveExpenses.addEventListener('click', function() {
    let sum = 0;
    
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(a) != null
            && a != "" && b != "" && a.length < 50) {
            console.log('done')
            appData.expenses[a] = b;
            sum += +b; 
        } else {
            i--;
        } 
    }
    necessaryExpenses.textContent = sum;
});

approveOptionalExpenses.addEventListener('click', function(){
    for(let i=0; i<=optionalExpensesItem.length; i++) {
        let ans = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = ans;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

calculateBudjet.addEventListener('click', function(){
    if(appData.budjet != undefined){
        appData.moneyPerDay = (appData.budjet/30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 1000) {
            incomeLavel.textContent = 'Minimum';
        } else if(appData.moneyPerDay > 1000 && appData.moneyPerDay < 10000) {
            incomeLavel.textContent = 'midle';
        } else if (appData.moneyPerDay > 10000){
            incomeLavel.textContent = 'hight';
        } else {
            incomeLavel.textContent = 'Произошла ошибка!';
        } 
    } else {
        dayBudget.textContent = 'Произошла ошибка!';
    }  
});

chooseIncomeLabel.addEventListener('input', function(){
    let items = chooseIncomeLabel.value;
    appData.income = items.split(", ");
    additionalIncome.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = + sumValue.value,
            percent = + percentValue.value;

        appData.mounthInCome = sum/100/12*percent;
        appData.yearInCome = sum/100*percent;
        
        monthSavingsValue.textContent = appData.mounthInCome.toFixed(1);
        yearSavingsValue.textContent = appData.yearInCome.toFixed(1);      
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = + sumValue.value,
            percent = + percentValue.value;

        appData.mounthInCome = sum/100/12*percent;
        appData.yearInCome = sum/100*percent;

        monthSavingsValue.textContent = appData.mounthInCome.toFixed(1);
        yearSavingsValue.textContent = appData.yearInCome.toFixed(1);      
    }
});


let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false    
};


