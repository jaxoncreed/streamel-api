/**
 * Film.js
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
        video: {
            type: 'string'
        },
        thumbnail: {
            type: 'string'
        },
        poster: {
            type: 'string'
        }
    },
    afterCreate: function(film, cb) {
        Meta.update({ id: film.meta }, { film: film.id }).exec(cb);
    }
};