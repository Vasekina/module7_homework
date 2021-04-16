/*Задание 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
*/

function Device(name) {
    this.name = name,
    this.type = 'electrical'
  }
  
  let sumVoltage = 0;
  
  Device.prototype.switch = function(status, voltage) {
    if (status == 'on') {
      sumVoltage += voltage;
      console.log(`Прибор ${this.name} включен. Мощность - ${voltage} Ватт`)
    }
    else {
      console.log(`Прибор ${this.name} выключен.`)
    }
  }
  
  function BigDevice(name, size) {
    this.name = name,
    this.size = 'большой'
  } 
   
  BigDevice.prototype = new Device ();
  
  const lamp = new Device('лампа');
  lamp.switch('on', 200)
  
  const laptop = new BigDevice ('ноутбук');
  laptop.switch('on', 100)
  
  const phone = new Device('телефон');
  phone.switch('off', 200)
  
  console.log(`Суммарная мощность ${sumVoltage}`)