function VehicleConstructor(name, wheels, passengers, noise, speed) {
	// function creates object vehicle with parameters name, number of wheels, number of passengers, noise, and speed
	
		var self = this;
	// private variable
		var distance_traveled = 0

	// private method
		var updateDistanceTraveled = function() {
			distance_traveled += self.speed;
		}


	// vehicle properties
		this.name = name,
		this.wheels = wheels,
		this.passengers = passengers
		this.noise = noise
		this.speed = speed
		this.makeNoise = function() { 
			console.log(noise + ", " + noise)
		}
		this.move = function() {
			updateDistanceTraveled();
			this.makeNoise();
		}
		this.checkMiles = function() {
			console.log(distance_traveled);
		}

	
}




// create instances bike, sedan, bus of the object vehicle
var bike = new VehicleConstructor("bike", 2, 1, "ring", 1);


var sedan = new VehicleConstructor("sedan", 4, 5, "honk", 10);


var bus = new VehicleConstructor("bus", 6, 22, "wee-AUHH", 7);





// add a method to the bus that picks up passengers and adds the number to the passenger count 
bus.pickUp = function(passenger) {
	
	bus.passengers += passenger;
	console.log(bus.passengers);
}



// Testing Testing

bus.makeNoise("wee-AUHH");
sedan.makeNoise("honk");
bus.pickUp(3);

console.log(bus);
bus.move();
bus.checkMiles();