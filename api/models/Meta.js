/**
* Meta.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    type: {
        type: 'string',
        emum: ['trailer', 'episode', 'series', 'film', 'user'],
        required: true
    },
    name: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string'
    },
    tags: {
        type: 'array',
        required: true
    },
    searchable: {
        type: 'boolean',
        required: true
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
  }
};

