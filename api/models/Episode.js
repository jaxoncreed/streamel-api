/**
* Episode.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    meta: {
        model: 'Meta',
        required: true
    },
    series: {
        model: 'Series',
        required: true
    },
    video: {
        type: 'string'
    },
    thumbnail: {
        type: 'string'
    }
  }
};

