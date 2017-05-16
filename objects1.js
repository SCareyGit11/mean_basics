function VehicleConstructor(name, wheels, passengers) {
	// function creates object vehicle with parameters name, number of wheels and number of passengers
	// object vehicle which will get returned by function VehicleConstructor
	var vehicle = {
		
	// vehicle properties
		name : name,
		wheels : wheels,
		passengers : passengers
	}
		
	// vehicle method
		vehicle.makeNoise = function(noise) { 
			console.log(noise + ", " +  noise)
		}


	return vehicle;
}

// create instances bike, sedan, bus of the object vehicle
var bike = VehicleConstructor("bike", 2, 1);
bike.makeNoise("ring");

var sedan = VehicleConstructor("sedan", 4, 5);
sedan.makeNoise("honk");

var bus = VehicleConstructor("bus", 6, 22);
bus.makeNoise("wee-AUHH");
console.log(bus.passengers)



// add a method to the bus that picks up passengers and adds the number to the passenger count 
bus.pickUp = function(passenger) {
	
	bus.passengers += passenger;
	console.log(bus.passengers);
}

bus.pickUp(3);
