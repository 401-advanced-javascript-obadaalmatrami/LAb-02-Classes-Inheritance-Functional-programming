'use strict';


const Vehicle = require('../src/classess/vehicle-constructor.js');

const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());