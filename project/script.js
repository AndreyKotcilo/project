'use strict'

let money = +prompt('Ваш бюджет на месяц ?', '');
let time = prompt('Введите дату','');
let expenses = prompt('Будут обязательные расходы','Да/Нет');
let expenses1 = +prompt('Во сколько обойдется','');

let appData = {
    money: money,
    data: time,
    expenses: expenses + expenses1,
    optionalExpenses: '',
    incom: '',
    savings: false
}

var x = alert((money-expenses1)/30);
