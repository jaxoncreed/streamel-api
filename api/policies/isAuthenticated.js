module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
        return next();
    }
    else{
        // TODO: This doesn't redirect to the right place. Should just indicate access failure
        return res.redirect('/login');
    }
};
