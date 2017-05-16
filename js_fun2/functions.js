function summation(x,y){

	var sum = 0
	
	for (n = x; n <= y ; n++){
		sum += n;
	}
	console.log(sum);
}

function minimum(array){
	var min = array[0]
	for (var i = 0; i < array.length; i++){
		if (array[i] < min){
			min = array[i];
		}
	}
	return min;
}


function average(array){
	sum = 0;

	for (var i = 0; i < array.length; i++){
		sum += array[i];
	}
	var avg = sum / array.length;
	return avg;
}


