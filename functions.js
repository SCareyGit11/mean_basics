function runningLogger() {
	console.log("I am running!");
}

function multiplyByTen(val) {
	return (val * 10);
}

multiplyByTen(5);

function stringReturnOne() {
	return "This is one";
}

function stringReturnTwo() {
	return "This is another";
}

function caller(parameter) {
	
	
	if (typeof parameter === "function") {
		parameter();
	}
}

function myDoubleConsoleLog(a,b) {
	if (typeof a === "function" && typeof b === "function") {
		console.log(a());
		console.log(b());
	}
	console.log("caller2test");

}
function caller2(parameter) {
	console.log("starting");
	
	if (typeof parameter === "function") {
		setTimeout(parameter, 2000);
	}
	
	console.log("ending?");
	return "interesting";
}

caller2(myDoubleConsoleLog);


console.log("DoneDoneDone");