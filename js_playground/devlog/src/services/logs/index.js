'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'logs.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/logs', service(options));

  // Get our initialize service to that we can bind hooks
  const logsService = app.service('/logs');

  // Set up our before hooks
  logsService.before(hooks.before);

  // Set up our after hooks
  logsService.after(hooks.after);
};
