function squareOfNumber (num){
    return num * num;
}

function inchesToMillimeters(inches){
    return inches * 25.4;
}

function squareRoot(num) {
    if (num < 0) {
      console.log("Can't get the root of a negative number.");
    }
    
    if (num === 0) return 0;
    
    let low = 0;
    let high = num > 1 ? num : 1;
    let mid;
    
    for (let i = 0; i < 100; i++) {
      mid = (low + high) / 2;
      if (mid * mid > num) {
        high = mid;
      } else {
        low = mid;
      }
    }
    
    return mid;
  }

function cubeOfNumber(num) {
    return num * num * num;
}

const PI = 3.14;

function areaOfCircle(radius){
    return PI * squareOfNumber(radius);
}
 
function greeting(name){
    return "Greetings, " + name + ".";
}

console.log("Square of 14:", squareOfNumber(14));
console.log("10 inches in millimeters:", inchesToMillimeters(10));
console.log("Square root of 16:", squareRoot(16));
console.log("Cube of 11:", cubeOfNumber(11));
console.log("Area of a circle with radius 14:", areaOfCircle(14));
console.log(greeting("Stan"));