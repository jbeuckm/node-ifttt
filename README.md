# ifttt

![IFTTT](https://d3rnbxvnd0hlox.cloudfront.net/assets/r2012/ifttt_logo_83-56800c44757a4683441a9f9c53fba868.svg)

Enables you to build IFTTT compatible node endpoints with express.

## Features

 - [Channel Status](https://developers.ifttt.com/docs/api_reference#channel-status) endpoint 
 - [User Info](https://developers.ifttt.com/docs/api_reference#user-information) endpoint
 - [Test Setup](https://developers.ifttt.com/docs/testing#the-testsetup-endpoint) endpoint with sample data
 - [Trigger](https://developers.ifttt.com/docs/api_reference#triggers) endpoints with [fields](https://developers.ifttt.com/docs/api_reference#trigger-fields) including [dynamic options](https://developers.ifttt.com/docs/api_reference#trigger-field-dynamic-options) & [dynamic validation](https://developers.ifttt.com/docs/api_reference#trigger-field-dynamic-validation)
 - [Action](https://developers.ifttt.com/docs/api_reference#actions) endpoints with [fields](https://developers.ifttt.com/docs/api_reference#action-fields) including [dynamic options](https://developers.ifttt.com/docs/api_reference#action-field-dynamic-options)

### Planned

 - [Realtime API](https://developers.ifttt.com/docs/api_reference#realtime-api) for Triggers

## Installation

Install the module via [npm](https://www.npmjs.com/):

```bash
$ npm install --save ifttt
```

Require the module in your code:

```javascript
var Ifttt = require('ifttt');
```

Create new IFTTT channel:

```javascript
var iftttChannel = new Ifttt();
```

Add triggers & actions to your IFTTT channel:

```javascript
iftttChannel.registerTrigger(YOUR_TRIGGER);
iftttChannel.registerAction(YOUR_ACTION);
```

Add IFTTT channel routes to your exmpress app.

```javascript
ifttt.addExpressRoutes(app);
```
