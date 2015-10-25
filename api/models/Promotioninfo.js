/**
 * Promotioninfo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        promotionFor: {
            model: 'Meta',
            required: true
        },
        trailers: {
            collection: 'Trailer',
            via: 'promotionInfoFor'
        },
        pitch: {
            type: 'string'
        }
    },
    afterCreate: function(promotioninfo, cb) {
        Meta.update({ id: promotioninfo.meta }, { promotioninfo: promotioninfo.id }).exec(cb);
    }
};