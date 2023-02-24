const collegeRoutes = require("./collegeRoutes");
const enquiryRoutes = require("./enquiryRoutes");
const contactRoutes = require("./contactRoutes");
const class11Routes = require("./class11Routes");
const class12Routes = require("./class12Routes");
const baRoutes = require("./baRoutes");
const BBARoutes = require("./BBARoutes");
const BcomRoutes = require("./BcomRoutes");
const MBARoutes = require("./MBARoutes");
const McomRoutes = require("./McomRoutes");
const CARoutes = require("./CARoutes");
const CSRoutes = require("./CSRoutes");

module.exports = function (app) {
    app.use('/api/v1', collegeRoutes);
    app.use('/api/v1', enquiryRoutes);
    app.use('/api/v1', contactRoutes);
    app.use('/api/v1', class11Routes);
    app.use('/api/v1', class12Routes);
    app.use('/api/v1', baRoutes);
    app.use('/api/v1', BBARoutes);
    app.use('/api/v1', BcomRoutes);
    app.use("/api/v1", MBARoutes);
    app.use("/api/v1", McomRoutes);
    app.use("/api/v1", CARoutes);
    app.use('/api/v1', CSRoutes);
}