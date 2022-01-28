const { Schema, model } = require('mongoose');

const wisheschema = new Schema(
    {
        wishText: {
            type: String,
            required: 'You need to leave a bucket list wish!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Wish = model('Wish', wisheschema);

module.exports = Wish;
