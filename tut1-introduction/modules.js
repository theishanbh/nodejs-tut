const xyz = require('./people')

const {people, ages} = require('./people')

console.log(xyz, people, ages)
// does not give access to varaibles in xyz if modules.exports not used
// console.log(people);
