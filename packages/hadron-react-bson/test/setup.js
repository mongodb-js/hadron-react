/* eslint no-undef: "off" */
/* eslint-env node */
require('babel-register')();

var jsdom = require('jsdom').JSDOM;

var exposedProperties = ['window', 'navigator', 'document'];

global.window = new jsdom('<!doctype html><html><body></body></html>');
global.document = window.document;
Object.keys(window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
