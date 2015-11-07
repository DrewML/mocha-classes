# Mocha Decorators

A simple proof of concept to explore using [ES2016 Decorators](https://github.com/wycats/javascript-decorators) to help write more declarative unit tests with [Mocha](https://mochajs.org/). Loosely insprired by the [NUnit](http://www.nunit.org/index.php?p=home) syntax.

## Benefits

- Less nesting, due to description of test not being a param to `describe`.
- Encourages more descriptive function names for `before` and `after` hooks (real world Mocha tests frequently use anon functions to avoid line length limits in projects), which leads to more descriptive stack traces.

## Is this a good idea?

Honestly, that's a great question. As of this time, I haven't identified much value that this decorator/class based test syntax provides. Having said that, my hope is that this at least kicks off some deeper thinking about how we can use newer JavaScript syntax to simplify writing tests.
