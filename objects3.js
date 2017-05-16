function Vehicle(name, wheels, passengers, speed) {
	
	// vehicle properties
		this.name = name,
		this.wheels = wheels,
		this.passengers = passengers,
		this.speed = speed
		
}



// Vehicle prototype attributes

Vehicle.prototype.distance_traveled = 0;

// Vehicle prototype methods

Vehicle.prototype.makeNoise = function() { 
			console.log("click, click");
			return this;
		};


Vehicle.prototype.checkMiles = function() {
			console.log(this.distance_traveled);
			return this;
		};

Vehicle.prototype.updateDistanceTraveled = function() {
		this.distance_traveled += this.speed;
		return this;
};

Vehicle.prototype.move = function() {
			this.updateDistanceTraveled();
			this.makeNoise();
			return this;
		};


var Bike = new Vehicle('bike', 2, 1, 2);
Bike.makeNoise = function() { 
			console.log("ring, ring");
			return this;
		};

var Sedan = new Vehicle('sedan', 4, 5, 10);
Sedan.makeNoise = function() { 
			console.log("Honk, Honk");
			return this;
		};

var Bus = new Vehicle('bus', 6, 22, 7);
Bus.makeNoise = function() { 
			console.log("Wee-Augh");
			return this;
		};
// add a method to the bus that picks up passengers and adds the number to the passenger count 

Bus.pickUp = function(passenger) {
	
	this.passengers += passenger;
	return this;
};






// Testing Testing

Bus.makeNoise();
Sedan.makeNoise();
Bus.pickUp(3);

console.log(Bus);
Bus.move();
Bus.checkMiles();