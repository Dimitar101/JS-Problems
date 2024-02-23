class Laptop {
    constructor(info, quality) {
        this.info = info;

        this.producer = this.info.producer;
        this.age = Number(this.info.age);
        this.brand = this.info.brand;

        this.isOn = false;
        this.quality = quality;
    }

    turnOn() {
        if (this.isOn === false) {

            this.isOn = true;
            this.quality -= 1;
        }
    }

    turnOff() {
        if (this.isOn === true) {

            this.isOn = false;
            this.quality -= 1;
        }
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    get price() {
        return 800 - (this.age * 2) + (this.quality * 0.5);
    }
}




// let info = { producer: "Dell", age: 2, brand: "XPS" };
// let laptop = new Laptop(info, 10);
// laptop.turnOn();
// console.log(laptop.showInfo());
// laptop.turnOff();
// console.log(laptop.quality);
// laptop.turnOn();
// console.log(laptop.isOn);
// console.log(laptop.price);

let info = {producer: "Lenovo", age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)
