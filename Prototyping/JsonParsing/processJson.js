/*esversion: 6 */
const myJson = require('./sample.json');
let me = "";
const checkme = myJson;
console.log(checkme.Message);
for(const key of Object.keys(checkme.devices)){
    console.log(checkme.devices[key])
}