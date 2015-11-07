function setAnnotation(annotationName, value, target, name, descriptor) {
    descriptor.value[annotationName] = value;
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
    before: setAnnotation.bind(null, annotes.before, true),
    beforeEach: setAnnotation.bind(null, annotes.beforeEach, true),
    after: setAnnotation.bind(null, annotes.after, true),
    it(testName) { return setAnnotation.bind(null, annotes.it, testName); },
    describe(suiteName) {
        return (suite) => {
            suite[annotes.describe] = suiteName;
        };
    }
};
