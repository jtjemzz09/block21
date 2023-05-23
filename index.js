// Define the Car constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Add the getDescription method to the Car prototype
Car.prototype.getDescription = function() {
  console.log(`Car: ${this.make} Model:${this.model} Year: ${this.year}`);
};

// Define the ElectricCar constructor function as a subclass of Car
function ElectricCar(make, model, year, range) {
  // Call the Car constructor to set inherited properties
  Car.call(this, make, model, year);
  this.range = range; // Add the range property specific to ElectricCar
}

// Set up the prototype chain for ElectricCar
Object.setPrototypeOf(ElectricCar.prototype, Car.prototype);

// Override the getDescription method of ElectricCar
ElectricCar.prototype.getDescription = function() {
  console.log(`Car: ${this.make}  Model:${this.model}  Year: ${this.year}  Range:${this.range}`);
};

// Create an instance of ElectricCar
const myCar = new ElectricCar("tesla", "S", 2019, "300");

// Call the getDescription method on the instance
myCar.getDescription();
