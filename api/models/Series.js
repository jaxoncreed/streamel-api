/**
 * Series.js
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
        episodes: {
            collection: 'Episode',
            via: 'series',
            required: true
        },
        poster: {
            type: 'string'
        }
    },
    afterCreate: function(series, cb) {
        Meta.update({ id: series.meta }, { series: series.id }).exec(cb);
    }
};