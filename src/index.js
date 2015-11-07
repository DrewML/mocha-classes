import decorators from './bdd-decorators';
import getAllProps from './get-all-props';

export { decorators };

export function runTest(suite) {
    let props = getAllProps(Object.getPrototypeOf(suite));
    let methods = props.map(prop => suite[prop]).filter(val => val);
    let tests = [];
    let beforeHooks = [];
    let beforeEachHooks = [];
    let afterHooks = [];
    let suiteName;

    methods.forEach(method => {
        if (method.suiteName) suiteName = method.suiteName;
        if (method.testName) tests.push(method);
        if (method.beforeFunc) beforeHooks.push(method);
        if (method.beforeEachFunc) beforeEachHooks.push(method);
        if (method.afterFunc) afterHooks.push(method);
    });

    describe(suiteName, () => {
        beforeHooks.forEach(beforeHook => before(beforeHook));
        beforeEachHooks.forEach(beforeEachHook => beforeEach(beforeEachHook));
        afterHooks.forEach(afterHook => after(afterHook));
        tests.forEach(test => it(test.testName, test));
    });
}
