const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    tittle: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        default: 'Egypt'
    },
    city: {
        type: String,
        default: 'Cairo'
    },
}, {
    toJSON: {
        transform: (doc, ret, options) => {
            delete ret.__v;
            return ret;
        },
    }
});



const profile = mongoose.model('Profile', profileSchema);
module.exports = profile;