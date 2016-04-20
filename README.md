# main-loop-app
Basic application glue code taken directly from [mercury](http://npmjs.com/packages/mercury) for use in [not-mercury](http://npmjs.com/packages/nhg).

## Installation

`npm install --save main-loop-app`

## Usage

```js
var app = require('main-loop-app');

var state = Observ({
  foo: 'bar'
});
function render (state) {
  return h('div', state.foo);
}

app(document.body, state, render);
```

## Contributing
`npm run test`

# License
MIT
