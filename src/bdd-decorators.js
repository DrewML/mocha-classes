function setHookProp(hookName, value, target, name, descriptor) {
    descriptor.value[hookName] = value;
    return descriptor;
}

let annotes = {
    before: 'beforeFunc',
    beforeEach: 'beforeEachFunc',
    after: 'afterFunc',
    it: 'testName',
    describe: 'suiteName'
};
export {annotes as annotations}

export let decorators = {
    before: setHookProp.bind(null, annotes.before, true),
    beforeEach: setHookProp.bind(null, annotes.beforeEach, true),
    after: setHookProp.bind(null, annotes.after, true),
    it(testName) { return setHookProp.bind(null, annotes.it, testName); },
    describe(suiteName) {
        return (suite) => {
            suite[annotes.describe] = suiteName;
        };
    }
};
