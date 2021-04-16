//Задание 5
//Переписать консольное приложение из предыдущего юнита на классы.

let sum = 0;

class Device {
  constructor(name) {
    this.name = name;
    this.type = 'electrical';
  }
 
  switch (status, voltage) {
    if (status == 'on') {
    sum += voltage;
    console.log(`Прибор ${this.name} включен. Мощность - ${voltage} Ватт`)
  }
  else {
    console.log(`Прибор ${this.name} выключен.`)
  }
  }
}

class BigDevice extends Device {
  constructor(name, type) {
    super(name, type);
    this.size = 'big';
  }
}

const lamp = new Device('лампа');
lamp.switch('on', 200)

const laptop = new Device ('ноутбук');
laptop.switch('on', 100)

const phone = new BigDevice('телефон');
phone.switch('off', 200)

console.log(`Суммарная мощность ${sum}`)
