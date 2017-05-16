var person;
function personConstructor(name) {
	person = {
		name : name,
		distance_traveled : 0,
		say_name : function() { alert(person.name) },
		say_something : function(string) { alert(person.name + " says, " + string);},
		walk : function() { alert(person.name + " is walking "); person.distance_traveled = person.distance_traveled + 3; },
		run : function() { alert(person.name + " is running "); person.distance_traveled = person.distance_traveled + 10; },
		crawl : function() { alert(person.name + " is crawling "); person.distance_traveled = person.distance_traveled - 1; }

	}
	console.log(person.name);
	person.say_name();
}

personConstructor("Sean");


var ninja;
function ninjaConstructor(name, cohort) {
	ninja = {
		name : name,
		cohort : cohort,
		belt : yellow,
		level_up : function() { ninja.belt = "black"}
	}

}

ninjaConstructor(Yoshi, Sochi);
Yoshi.ninja.level_up();