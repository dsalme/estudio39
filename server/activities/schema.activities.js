(function () {
  'use strict';
  module.exports = function (mongoose) {
    var Schema = mongoose.Schema;
    return new Schema({
      name: String,
      price: String
    });
  }
}());