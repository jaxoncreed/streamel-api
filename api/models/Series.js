/**
* Series.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        name: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
        user: {
            type: "string",
            required: true
        },
        episodes: {
            collection: "episode",
            via: "series"
        }
    }
};

