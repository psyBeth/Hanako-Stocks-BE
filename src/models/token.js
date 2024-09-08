'use strict'

const { mongoose } = require('../configs/dbConnection');

/* ------------------------------------------------------- *
{
  "userId": "65343222b67e9681f937f001",
  "token": "...tokenKey..."
}
/* ------------------------------------------------------- */

const TokenSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
  }

}, {
  collection: 'tokens',
  timestamps: true
});