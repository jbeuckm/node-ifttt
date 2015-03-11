# ifttt

![IFTTT](https://d3rnbxvnd0hlox.cloudfront.net/assets/r2012/ifttt_logo_83-56800c44757a4683441a9f9c53fba868.svg)

Enables you to build [IFTTT](https://ifttt.com) compatible node endpoints with express.

## Features

 - [Channel Status](https://developers.ifttt.com/docs/api_reference#channel-status) endpoint 
 - [User Info](https://developers.ifttt.com/docs/api_reference#user-information) endpoint
 - [Test Setup](https://developers.ifttt.com/docs/testing#the-testsetup-endpoint) endpoint with sample data
 - [Trigger](https://developers.ifttt.com/docs/api_reference#triggers) endpoints with [fields](https://developers.ifttt.com/docs/api_reference#trigger-fields) including [dynamic options](https://developers.ifttt.com/docs/api_reference#trigger-field-dynamic-options) & [dynamic validation](https://developers.ifttt.com/docs/api_reference#trigger-field-dynamic-validation)
 - [Action](https://developers.ifttt.com/docs/api_reference#actions) endpoints with [fields](https://developers.ifttt.com/docs/api_reference#action-fields) including [dynamic options](https://developers.ifttt.com/docs/api_reference#action-field-dynamic-options)

### Planned

 - [Realtime API](https://developers.ifttt.com/docs/api_reference#realtime-api) for Triggers

## Install

Install the module via [npm](https://www.npmjs.com/):

```bash
$ npm install --save ifttt
```

## Usage

```javascript
// Require the module in your code.
var Ifttt = require('ifttt');

// Create new IFTTT channel.
var iftttChannel = new Ifttt();

// Add triggers & actions to your IFTTT channel.
iftttChannel.registerTrigger(YOUR_TRIGGER);
iftttChannel.registerAction(YOUR_ACTION);

// Add IFTTT channel routes to your express app.
iftttChannel.addExpressRoutes(app);
```

## Examples

### Create trigger

```javascript
// Require the module in your code.
var Ifttt = require('ifttt');
var util = require('util');

// Create example trigger.
function ExampleTrigger() {
  ExampleTrigger.super_.call(this, 'example');
}
util.inherits(ExampleTrigger, Ifttt.Trigger);

// Overwrite `_getResponseData` with your response handler.
ExampleTrigger.prototype._getResponseData = function(req, requestPayload, cb){
  var results = [];

  results.push({
    field1: 'value1',
    created_at: new Date().toISOString(),
    meta: {
      id: 'id1',
      timestamp: new Date.now()
    }
  });

  return cb(null, results);
};

module.exports = ExampleTrigger;
```

### Create action

```javascript
// Require the module in your code.
var Ifttt = require('ifttt');
var util = require('util');

// Create example action.
function ExampleAction() {
  ExampleAction.super_.call(this, 'example');
}
util.inherits(ExampleAction, Ifttt.Action);

// Overwrite `_getResponseData` with your response handler.
ExampleAction.prototype._getResponseData = function(req, requestPayload, cb){
  var results = [];

  results.push({
    id: 'id1'
  });

  return cb(null, results);
};

module.exports = ExampleAction;
```

### Create trigger field

```javascript
// Require the module in your code.
var Ifttt = require('ifttt');
var util = require('util');

// Create example field.
function ExampleField() {
  ExampleField.super_.call(this, 'example');

  // Set sample data so IFTTT can properly test this field.
  this.setOptionsSampleData('valid_option_value', 'invalid_option_value');
}
util.inherits(ExampleField, Ifttt.Trigger.TriggerField);

// Overwrite `_getOptionsData` to return field options.
ExampleField.prototype._getOptionsData = function(req, response, cb){
  var option = new response.OptionEntity();
  option.setLabel('Valid option 1');
  option.setValue('valid_option_value');
  response.addOption(option);

  var option = new response.OptionEntity();
  option.setLabel('Valid option 2');
  option.setValue('valid_option_value2');
  response.addOption(option);

  return cb(null);
};

// Overwrite `_getValidateData` to check if value is valid.
ExampleField.prototype._getValidateData = function(req, response, payload, cb){
  var value = payload.getValue();

  if (value === 'valid_option_value') {
    response.setValid(true);
    return cb(null);
  }
  else if (value === 'invalid_option_value') {
    response.setValid(false);
    return cb(null);
  }
};

module.exports = ExampleField;
```
