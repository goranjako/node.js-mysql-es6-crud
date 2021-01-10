import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let CostumerSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'fullName is required...!']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/],
    },
    phone: {
        type: Number,
        required: [true, 'What is your contact number?']
    },
    address: {
        type: String,
        required: [true, 'address is required...!']
    }
});





export default mongoose.model('Costumer', CostumerSchema);