/**
 * SeriesController
 *
 * @description :: Server-side logic for managing series
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Model = require('../models/Series');

module.exports = {
    search: function(req, res) {
        var term = req.query.q;
        Model.searchByTerm(term, function(err, list) {
            res.json(list);
        });
    }
};

