import Car from './10-car.js';

export default class sEVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
