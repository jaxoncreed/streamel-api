/**
* Meta.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var afterCreateMap = {
    user: function(meta, cb) {
        cb();
    },
    film: function(meta, cb) {
        cb();
    }
}

module.exports = {

  attributes: {
    type: {
        type: 'string',
        enum: ['trailer', 'episode', 'series', 'film', 'user'],
        required: true
    },
    name: {
        type: 'string',
    },
    description: {
        type: 'string'
    },
    tags: {
        type: 'array',
        defaultsTo: []
    },
    searchable: {
        type: 'boolean',
        defaultsTo: 'true'
    },
    creator: {
        model: 'User'
    },
    user: {
        model: 'User'
    },
    trailer: {
        model: 'Trailer'
    },
    film: {
        model: 'Film'
    },
    series: {
        model: 'Series'
    },
    episode: {
        model: 'Episode'
    }
  },

  afterCreate: function(meta, cb) {
    afterCreateMap[meta.type](meta, cb);
  }
};

