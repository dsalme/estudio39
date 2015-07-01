(function(){
  'use strict';
  module.exports = function (express, ActivitiesModel) {
    var router = express.Router();
    var ActivitiesController = require('./controller.activities')(ActivitiesModel);
    var ResponseHandlerProvider = require('../providers/ResponseHandlerProvider');

    router.get('/', function (req, res, next) {
      ActivitiesController.findAllActivities(req.body, ResponseHandlerProvider.defaultHttpResponseHandler(res, next));
    });

    router.post('/', function(req, res, next){
      ActivitiesController.newActivity(req.body, ResponseHandlerProvider.defaultHttpResponseHandler(res, next));
    });

    router.put('/')

    return router;
  }
}());
