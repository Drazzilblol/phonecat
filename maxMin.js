var _ = require('underscore');

var maxMin = function(array){
  var resultObject = {};
  resultObject.max = _.max(array);
  resultObject.min = _.min(array);
  return resultObject;
}
 module.exports.maxMin = maxMin;

