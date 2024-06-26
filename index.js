// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2);
}
const firstDrivers = returnFirstTwoDrivers();
console.log(firstDrivers)

const returnLastTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(-2);
}
const lastDrivers = returnLastTwoDrivers();
console.log(lastDrivers)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(interger){
    return function(fare){
     return fare*interger

}
}

let  number = 4
let quadrupled = createFareMultiplier(number)
console.log(quadrupled)

const fareDoubler =  createFareMultiplier(2)
let fare = 20;
let doubledFare = fareDoubler(fare);

const fareTripler = createFareMultiplier(3)
let triplefare = 36
let fareTriplerr = fareTripler(triplefare)


function returnFirstTwoDriver(drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDriver(drivers) {
    return drivers.slice(-2);
}


function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
}

const driverNames = ['Antonia', 'Nuru', 'Amari', 'Mo'];


let firstTwoDrivers = selectDifferentDrivers(driverNames, returnFirstTwoDriver);


let lastTwoDrivers = selectDifferentDrivers(driverNames, returnLastTwoDriver);
 


