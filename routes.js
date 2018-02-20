const routes = require('next-routes')();

//add a woldcard
routes
    .add('/campaigns/new','/campaigns/new')
    .add('/campaigns/:address','/campaigns/show');
module.exports = routes;