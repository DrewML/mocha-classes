import {expect} from 'chai';
import {bdd, runTest} from '../lib';

class BaseTest {
    @bdd.before
    myInheritedBeforeHook() { }
}

@bdd.describe('ES2016 Decorators with Mocha')
class MyUnitTest extends BaseTest {
    @bdd.before
    myBeforeHook() { } 
    
    @bdd.beforeEach
    myBeforeEachHook() { }
    
    @bdd.after
    myAfterHook() { }

    @bdd.it('should pass')
    sampleTestCase() {
        expect(true).to.be.true;
    }
}

// Map class to a Mocha test
runTest(new MyUnitTest());
