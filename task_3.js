/*Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.*/

function noProto() {
    return Object.create(null);
     }
    
    console.log(noProto())
