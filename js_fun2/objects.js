var math = {

summation : function(x,y){

	var sum = 0
	
	for (n = x; n <= y ; n++){
		sum += n;
	}
	console.log(sum);
},

minimum : function(array){
	var min = array[0]
	for (var i = 0; i < array.length; i++){
		if (array[i] < min){
			min = array[i];
		}
	}
	return min;
},


average : function(array){
	sum = 0;

	for (var i = 0; i < array.length; i++){
		sum += array[i];
	}
	var avg = sum / array.length;
	return avg;
}

}


var person = {
	name : "Sean",
	distance_traveled : 0,
	say_name : function() { return person.name},
	say_something : function(string) { return person.name + " says, " + string;},
	walk : function() { console.log(person.name + " is walking "); person.distance_traveled = person.distance_traveled + 3; },
	run : function() { console.log(person.name + " is running "); person.distance_traveled = person.distance_traveled + 10; },
	crawl : function() { console.log(person.name + " is crawling "); person.distance_traveled = person.distance_traveled - 1; }

}

console.log(person.say_name());
console.log(person.say_something("Oh Yeah!"));
person.walk();
person.run();
person.crawl();


console.log(person.distance_traveled);