const collegeRoutes = require("./collegeRoutes");
const enquiryRoutes = require("./enquiryRoutes");
const contactRoutes = require("./contactRoutes");


module.exports = function (app) {
    app.use('/api/v1', collegeRoutes);
    app.use('/api/v1', enquiryRoutes);
    app.use('/api/v1' , contactRoutes);
}