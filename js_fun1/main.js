var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for (i=0; i < x.length; i++){
	console.log(x[i]);
}

x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

var sum = 0
for (n = 1; n < 501 ; n++){
	sum += n;
}
console.log(sum);

var array = [1, 5, 90, 25, -3, 0];
var min = array[0]
for (var i = 0; i < array.length; i++){
	if (array[i] < min){
		min = array[i];
	}
}
console.log(min);


sum = 0;

for (var i = 0; i < array.length; i++){
	sum += array[i];
}
var avg = sum / array.length;
console.log(avg);

var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (key in new_ninja){
	console.log(key, ":", new_ninja[key])
}