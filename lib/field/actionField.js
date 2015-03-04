var util = require('util');

var Field = require('./field');

/**
 * ActionField
 *
 * @param slug
 * @constructor
 * @see https://developers.ifttt.com/docs/api_reference#action-fields
 */
function ActionField(slug) {
  ActionField.super_.call(this, slug);

  // Default to not required.
  this.fieldRequired = false;
}
util.inherits(ActionField, Field);

ActionField.prototype.setRequired = function(required) {
  this.fieldRequired = required;
};

ActionField.prototype.isRequired = function() {
  return this.fieldRequired;
};

module.exports = ActionField;
