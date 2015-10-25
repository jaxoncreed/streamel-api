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
            model: 'User',
            via: 'meta'
        },
        trailer: {
            model: 'Trailer',
            via: 'meta'
        },
        film: {
            model: 'Film',
            via: 'meta'
        },
        series: {
            model: 'Series',
            via: 'meta'
        },
        episode: {
            model: 'Episode',
            via: 'meta'
        }
    }
};