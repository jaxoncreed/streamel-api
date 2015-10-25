/**
* Comment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user: {
        model: 'User'
    },
    piece: {
        model: 'Meta',
        required: true
    },
    platform: {
        type: "string",
        enum: ["twitter", "facebook"]
    },
    rating: {
        type: 'integer',
        enum: [1, 2, 3, 4, 5]
    },
    message: {
        type: "string",
        required: true
    }
  }
};