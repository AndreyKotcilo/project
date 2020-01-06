 'use strict'

let money = +prompt('Ваш бюджет на месяц ?', '');
let time = prompt('Введите дату','');
// let expenses = prompt('Будут обязательные расходы','Да/Нет');
// if (expenses == "Нет") { }
// else if (expenses == "Да") {
//      let expenses1 = +prompt('Во сколько обойдется','');
//     ((typeof(expenses1)) === 'string' && (typeof(expenses1)) != null && expenses1 != '' && expenses1.length < 50); 
//  }
//  else {
//      alert('Вы ввели не прильный ответ');
//  };
let expenses;
let expenses1;
let i = 0;
while (expenses = prompt('Будут обязательные расходы','Да/Нет'), i < 1) {
    if (expenses === 'Нет') {
        i++
        break;
    }
     else if (expenses === 'Да') {
        expenses1 = +prompt('Во сколько обойдется','');
        i++
        break;
    }
    else { alert('Вы вввели не правильный вариант')}
    
}
let appData = {
    budget: money,
    data: time,
    rashod: expenses,
    optionalExpenses: {},
    incom: [],
    savings: false
};

appData.DayMoney = (money - expenses1) / 30;
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
};
// let t = +prompt('Числа исключения', '');

// for(var i = 1; i < 9; i++){
//     if (i == t) {
//         continue
//     }
//     // if (i == r) {
//     //     continue
//     // }
//  console.log(i)
// }
