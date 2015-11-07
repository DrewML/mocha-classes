function setHookProp(hookName, value, target, name, descriptor) {
    descriptor.value[hookName] = value;
    return descriptor;
}

export default {
    before: setHookProp.bind(null, 'beforeFunc', true),
    beforeEach: setHookProp.bind(null, 'beforeEachFunc', true),
    after: setHookProp.bind(null, 'afterFunc', true),
    it(testName) { return setHookProp.bind(null, 'testName', testName); },
    describe(suiteName) {
        return (suite) => {
            suite.suiteName = suiteName;
        };
    }
};
