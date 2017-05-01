import {expect} from 'chai';
import {bdd, runTest} from '../lib';

class BaseTest {
    baseClassFunc() {
        return 42;
    }

    @bdd.before
    myInheritedBeforeHook() { }
}

@bdd.describe('ES2016 Decorators with Mocha class fields and methods')
class MyUnitTest extends BaseTest {
    thisField = 10;

    thisFunc() {
        return 43;
    }

    @bdd.before
    myBeforeHook() { }

    @bdd.beforeEach
    myBeforeEachHook() { }

    @bdd.after
    myAfterHook() { }

    @bdd.it('should pass')
    sampleTestCase() {
        expect(this.thisFunc()).to.equal(43);
        expect(this.baseClassFunc()).to.equal(42);
        expect(this.thisField).to.equal(10);
        expect(true).to.be.true;
    }
}

// Map class to a Mocha test
runTest(new MyUnitTest());
