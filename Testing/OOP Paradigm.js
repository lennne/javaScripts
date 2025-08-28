// OOP allows you to create objects that contain data and functionalities that are similar or related
//allows you to write modular code
//makes your code flexible 
//makes your code reusable
//OOP PRINCIPLES
// Inheritance
// Encapsulation
// Abstraction
// Polymorphism



// OOP 1
// var purchase1 = {
//     shoes: 100,
//     stateTax: 1.2,
//     totalPrice: function(){
//         var calculation = purchase1.shoes * purchase1.stateTax;
//         console.log('Total price', calculation);
//     }
// }
// purchase1.totalPrice();

// class Bird {
//     useWings() {
//         console.log("Flying!")
//     }
// }
// class Eagle extends Bird {
//     useWings() {
//         super.useWings()
//         console.log("Barely flapping!")
//     }
// }
// class Penguin extends Bird {
//     useWings() {
//         super.useWings();
//         console.log("Diving!")
//     }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"

// function Icecream(flavor){
//     this.flavor = flavor;
//     this.meltIt = function(){
//         console.log(`The ${this.flavor} icecream has melted`);
//     }
// }

// var mangoIcecream = new Icecream("flavor");
// mangoIcecream;

// class Train{
//     constructor(color,lightson){
//         this.color = color;
//         this.lightson = lightson;
//     }

//     toggleLights(){
//         this.lightson = !this.lightson;
//     }

//     lightsStatus(){
//         console.log('lights on?', this.lightson);
//     }

//     getSelf(){
//         console.log(this);
//     }
//     getPrototype(){
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }

// var train4 = new Train('red',false);
// train4.toggleLights();
// train4.lightsStatus();
// train4.getSelf();
// train4.getPrototype();
// console.log(Train.prototype);

class StationaryBike{
    constructor(position, gears){
        this.position = position;
        this.gears = gears;
    }
}

class Treadmill{
    constructor(position,gears){
        this.position = position;
        this.gears = gears;
    }
}

class gym {
    constructor(openHrs, stationaryBikePos, treadMillpos){
        this.openHrs = openHrs;
        this.stationaryBike = new StationaryBike(stationaryBikePos,8);
        this.treadMill = new Treadmill(treadMillpos, 6);
    }
}

var boxingGym = new gym('7-22', "right corner", "leftCorner");
console.log(boxingGym.openHrs);
console.log(boxingGym.stationaryBike);
console.log(boxingGym.treadMill);

var pack = ['mint','chocolar','ice']
for(var chicken of pack){
    console.log(chicken);
}

var animal = {
    eyes:2,
    life:"breath",
    mouth:"lips",
    butt:"double",
    face:"cheeked up"
}

for (const key of Object.keys(animal)){
    console.log("each item is ", animal[key]);
}


for (const prop in animal){
    console.log(prop + ":" + animal[prop]);
}


//Methods on arrays
// foreach
// filter
// map

var hello = [];
hello = [1,2,3,4];
hello.forEach((humpty,sabolay)=>{
    console.log(sabolay + "sike boys" + humpty);
});
function wowthisworks(forone, allfortwo){
    console.log(`${allfortwo}. ${forone}`)
}

hello.forEach(wowthisworks);

console.log(hello.filter((something, index)=>{
    return something%2 === 0;
}));

function figureditout(so,ford,tear,bact){
    console.log(so,ford,tear,bact);
}
figureditout(...hello);