//the point of this snippet of code is that
//since functions are objects, we can bind an object of data to it
//and that function's data attributes, properties will be the object you binded
const ageData = {
    joe: 25,
    Mary: 30
}

function getAge (name, meme){
    return this[name] + " " +  this[meme]
}

//creates a new function and calls the function by passnig in "joe"
const getBoundAge = getAge.bind(ageData)("joe")

const myString = getAge.call(ageData, ...["joe", "Mary"])
console.log(myString)

//we also have apply which is similar in functionality to call but instead of a list you pass in an array
const boundedAge = getAge.apply(ageData, ['joe', 'Mary'])

//Managing context using arrow functions
//the arrow functions inherits context from it's parent
//and this allows the parent to share context values with this function without requiring explicit calling/binding or applying

this.garlic = false 
this.charger = "100W"

const soup = { garlic: true };

console.log("\n ------------------------ \n")

soup.hasGarlic1 = function() { console.log(this.garlic)}

soup.hasGarlic2 = () => {console.log(this.garlic)}

soup.hasGarlic1()
soup.hasGarlic2()


const vehicle = function(make, model){ //vehicle owns the prototype property
    this.make = make
    this.model = model

    

    this.print = function(){
        return `${this.make}: ${this.model}`;
    }
}


//prototype javascript
const prius = new vehicle('Toyota', 'Prius') //this new Vehicle creates an object and it attaches the prototype property to it
//prius object(new object) points to the prototype(had a constructor) whose constructor was invoked to create prius
const charger = new vehicle('Dodger', 'Charger')
console.log(prius.print())
console.log(charger.print())

console.log(prius.__proto__ === charger.__proto__)
console.log(prius)

//objects in javascript are mutual by default
//object prototypes allow you to change object properties in real type
//therefore sub-classes(child objects created from the parent class) will inherit the new properties
//you assign in realtime as if they existed during the parent object definition

vehicle.prototype.getMaxSpeed = () => {
    console.log("hello world");
}
prius.getMaxSpeed()


//notice we're changing prius
prius.__proto__.getMaxSpeed =  () => {
    console.log("bye world")
}
//but although we changed prius, since priius and charger are connected to the prototype's constructor  through __proto__ we are able to 
//propagate it to charger as if we changed it in the parents prototype function
charger.getMaxSpeed()


//but assigning properties without prototype makes the properties function as static methods

//Additionally, because prototypes propagate to children when modified, a special type
//of attack is found in JavaScript-based systems called Prototype Pollution.