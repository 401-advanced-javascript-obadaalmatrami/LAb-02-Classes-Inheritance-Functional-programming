'use strict';


const Vehicle = require('../src/classess/vehicle-constructor.js');

const bmw = new Vehicle.Car('BMW M3 E46');
console.log(bmw.name, bmw.drive(), bmw.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());