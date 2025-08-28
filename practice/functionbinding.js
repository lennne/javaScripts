const ageData = {
    joe: 25,
    Mary: 30
}

function getAge (name){
    return this[name]
}

//creates a new function and calls the function by passnig in "joe"
const getBoundAge = getAge.bind(ageData)("joe")
