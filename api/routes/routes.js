const collegeRoutes = require("./collegeRoutes");



module.exports = function (app) {
    app.use('/api/v1', collegeRoutes);
}