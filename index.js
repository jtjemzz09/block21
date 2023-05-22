function Car (make,model,year){
this.make= make;
this.model= model;
this.year= year;

}

Car.prototype.getDescription =function(){
console.log(`Car: ${this.make} ${this.model} ${this.year}`);

}

function ElectricCAr(make,model,year,range ){
Car.call(this, make,model,year);
this.range= range;
}
