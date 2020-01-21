'use strict';

const Vehicle = function(name, wheels) {

    this.name = name;
    this.wheels = wheels;

};

Vehicle.this.drive = () => {

    return 'Moving Forward';
};

Vehicle.this.stop = () => {

    return 'Stopping';
};


const Car = function(name) {

    Vehicle.call(this, name, 4);
};

Car.this = new Vehicle();


const Motorcycle = function(name) {

    Vehicle.call(this, name, 2);
};

Motorcycle.this = new Vehicle();

Motorcycle.this.wheelie = () => {

    return 'wheeeieieie!';
};

module.exports = { Car, Motorcycle };