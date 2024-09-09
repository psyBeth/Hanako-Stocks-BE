'use strict'

const { mongoose } = require('../configs/dbConnection');

const UserSchema = new mongoose.Schema({

    username: {

    },

    password: {

    },

    email: {

    },

    firstName: {

    },

    lastName: {

    },

    isActive: {

    },

    isStaff: {

    },

    isAdmin: {
        
    }

}, {
    collection: 'users',
    timestamps: true
})