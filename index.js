let restoraunt={
    name: "Asema",
    year:2023,
    isOpen:true,
    age:null,
    amount:34*"asem"
}

console.log(restoraunt);

restoraunt.price=2000;

console.log(restoraunt);

delete restoraunt.price;

let vehicle={};
vehicle.brandName="BMW";
vehicle.model="X5";
vehicle.model="M1";
delete vehicle.model;

let salaries={
    Aroo:100,
    Dalida:160,
    Samat:130
}
let amount=0;

for (let key in salaries){
    amount=amount+salaries[key]
}

console.log(amount);