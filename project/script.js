 'use strict'

let money = +prompt('Ваш бюджет на месяц ?', '');
let time = prompt('Введите дату','');
let expenses;
let i = 0;
while (expenses = prompt('Будут обязательные расходы','Да/Нет'), i < 1) {
    if (expenses === 'Нет') {
        i++;
        break;
    }
     else if (expenses === 'Да') {
        expensesFunc ();
        break;
    }
    else { alert('Вы вввели не правильный вариант')}
}
var expenses1;
function expensesFunc () {
    expenses1 = +prompt('Во сколько обойдется','');
    while(isNaN(expenses1) || expenses1 == "" || expenses1 == null) {
        expenses1 = +prompt('Во сколько обойдется','');
    }
}

let appData = {
    budget: money,
    data: time,
    rashod: expenses,
    optionalExpenses: {},
    incom: [],
    savings: false
};

appData.DayMoney = (money / 30).toFixed();
alert(appData.DayMoney);

console.log("Доход:"+ appData.budget);
console.log("дата:"+ appData.data);
console.log("Доп расходы:"+ appData.expenses);
console.log("Сумма доп расходов:"+ expenses1);
console.log("Доход с учетом расходов:"+ (money - expenses1));
console.log("Сумма на 1 день:"+ appData.DayMoney);
console.log(appData);

if(appData.DayMoney < 100) {
    alert('Минимальный уровень');
}
else if (appData.DayMoney > 100 && appData.DayMoney < 1000){
    alert('Средний уровень');
}
else if (appData.DayMoney > 1000) {
    alert('Высокий уровень');
}
else {
    alert('Ошибка');
}