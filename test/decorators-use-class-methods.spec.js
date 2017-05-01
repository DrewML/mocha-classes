import {expect} from 'chai';
import {bdd, runTest} from '../lib';

class BaseTest {
    baseField = 20;

    baseClassFunc() {
        return 42;
    }

    @bdd.before
    myInheritedBeforeHook() {
        this.baseBeforeInitialized = 15;
    }
}

@bdd.describe('ES2016 Decorators with Mocha class fields and methods')
class MyUnitTest extends BaseTest {
    thisField = 10;

    thisFunc() {
        return 43;
    }

    @bdd.before
    myBeforeHook() {
        this.beforeInitialized = 30;
    }

    @bdd.beforeEach
    myBeforeEachHook() { }

    @bdd.after
    myAfterHook() { }

    @bdd.it('should pass')
    sampleTestCase() {
        expect(this.thisFunc()).to.equal(43);
        expect(this.baseClassFunc()).to.equal(42);
        expect(this.thisField).to.equal(10);
        expect(this.baseField).to.equal(20);
        expect(this.beforeInitialized).to.equal(30);
        expect(this.baseBeforeInitialized).to.equal(15);
        expect(true).to.be.true;
    }

    @bdd.it.skip('should be skipped')
    skippedTest() {
        expect(true).to.be.false;
    }
}

runTest(new MyUnitTest());
