var password = require('../../secrets').adminPass;

module.exports = function(req, res, next) {
    if (req.headers.password === password) {
        return next();
    } else {
        return res.status(403).send();
    }
};