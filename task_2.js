/*Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

function func(obj, str) {
    for (let key in obj) {
    if (key === str) {
      return true
    }
    else {
      return false
    }
    }
    }
    
    const city = {
      name: 'SPB',
      amount: 5000000, 
    };
    
    console.log(func(city, "name"))
    console.log(func(city, "123"))
    

