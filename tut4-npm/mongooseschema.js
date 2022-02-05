const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    User : String,
    Id : {
        type : String,
        required:true
    }
})

// console.log(typeof UserSchema);
const Kitten = mongoose.model("User", UserSchema)

// write inputs given
const silence = new Kitten({User:"silence", Id:"silence",})
console.log(silence);
console.log(silence.User);

// wrong inputs given
const hello = new Kitten({name:"backoff"})
console.log(hello);
console.log(hello.name);