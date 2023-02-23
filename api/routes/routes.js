const collegeRoutes = require("./collegeRoutes");
const enquiryRoutes = require("./enquiryRoutes");
const contactRoutes = require("./contactRoutes");
const class11Routes = require("./class11Routes");
const class12Routes = require("./class12Routes");
const baRoutes = require("./baRoutes");

module.exports = function (app) {
    app.use('/api/v1', collegeRoutes);
    app.use('/api/v1', enquiryRoutes);
    app.use('/api/v1', contactRoutes);
    app.use('/api/v1', class11Routes);
    app.use('/api/v1', class12Routes);
    app.use('/api/v1', baRoutes);
}