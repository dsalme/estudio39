(function () {
  'use strict';
  module.exports = function (ActivitiesModel) {

    var ErrorProvider = require('../providers/ErrorProvider');
    var PublicInterface = {};
    PublicInterface.findAllActivities = function (data, callback) {
      ActivitiesModel.find({}, function (err, doc) {
        if (err) return callback(ErrorProvider.getDatabaseError());
        return callback(false, doc);
      })
    };

    PublicInterface.newActivity = function (data, callback) {
      if (!data || !data.name) return callback(ErrorProvider.getMissingParametersError());
      ActivitiesModel.create(data, function (err, doc) {
        if (err) return callback(ErrorProvider.getDatabaseError());
        return callback(false, doc);
      });
    };
    return PublicInterface;
  }
}());