const collegeRoutes = require("./collegeRoutes");
const enquiryRoutes = require("./enquiryRoutes");


module.exports = function (app) {
    app.use('/api/v1', collegeRoutes);
    app.use('/api/v1', enquiryRoutes);
}