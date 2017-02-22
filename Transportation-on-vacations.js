// https://www.codewars.com/kata/transportation-on-vacation/javascript

function rentalCarCost(d) {

var total = d * 40; // base price to rent the car

if(d >= 3 && d < 7) {
  total = total -20; // Rent the car for 3 or more days, you get $20 off your total.
}else if(d >= 7){
  total =total- 50; //  Rent the car for 7 or more days, you get $50 off your total
}
return total;
}
