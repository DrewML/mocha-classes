# Mocha Classes

A simple proof of concept to explore using [ES2015 Classes](http://www.2ality.com/2015/02/es6-classes-final.html) and [ES2016 Decorators](https://github.com/wycats/javascript-decorators) to help write more declarative unit tests with [Mocha](https://mochajs.org/). Loosely insprired by the [NUnit](http://www.nunit.org/index.php?p=home) syntax.

**Warning:** [Decorators are currently broken (as of 10/29/15) in Babel 6](https://github.com/babel/babel/issues/2645). Until that's addressed, you'll need to use Babel 5 if you plan to use decorators in your project.

## Install

```bash
npm install --save-dev mocha-classes
```

## Features
- Write tests using ES2015 Classes
- Supports inherited life-cycle hooks (`before`, `beforeEach`, etc) from subclasses

## Example Test

Note: A more thorough example can be seen in `test/decorators-example.spec.js`

```javascript
import {expect} from 'chai';
import {bdd, runTest} from 'mocha-classes';

@bdd.describe('ES2015 Classes and ES2016 Decorators with Mocha')
class MyUnitTest {
    @bdd.it('should pass')
    sampleTestCase() {
        expect(true).to.be.true;
    }
}

runTest(new MyUnitTest());
```

## Is this really a good idea?

Honestly, that's a great question. As of this time, I haven't identified much value that this decorator/class based test syntax provides. Only time will tell...


## Possible Benefits

- Less nesting, due to description of test not being a param to `describe`.
- Encourages more descriptive function names for life-cycle hooks like `before` and `after`  (real world Mocha tests frequently use anon functions to avoid line length limits in projects), which leads to more descriptive stack traces.

## Possible Future Enhancements

1. Make argument to `describe` and `it` decorators optional, and infer test name from fn name when not provided (similar to NUnit)
