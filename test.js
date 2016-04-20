var test = require('tape');
var app = require('./');
var h = require('virtual-dom/h');
var Document = require('global/document');
var Observ = require('observ');

test(function (t) {
  // (elem, observ, render, opts) {
  var state = Observ({
    foo: 'bar'
  });

  var stop = app(Document.body, state, render);

  setTimeout(function () {
    t.ok(Document.body.childNodes.length, 'appends dom element');
    var myElem = Document.body.childNodes[0];
    t.equal(myElem.childNodes[0].data, state().foo, 'contains correct data');

    state.set({
      foo: 'indeed'
    });

    setTimeout(function () {
      var myElem = Document.body.childNodes[0];
      t.equal(myElem.childNodes[0].data, state().foo, 'contains correct data');
      stop();
      t.end();
    });
  });
});

function render (state) {
  return h('div', state.foo);
}
