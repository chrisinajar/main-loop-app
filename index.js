var Delegator = require('dom-delegator');
var Main = require('main-loop');
var extend = require('xtend');

module.exports = app;

function app (elem, observ, render, opts) {
  if (!elem) {
    throw new Error(
      'Element does not exist. ' +
      'Mercury cannot be initialized.');
  }

  Delegator(opts);
  var loop = Main(observ(), render, extend({
    diff: require('virtual-dom/diff'),
    create: require('virtual-dom/create-element'),
    patch: require('virtual-dom/patch')
  }, opts));

  elem.appendChild(loop.target);

  return observ(loop.update);
}
