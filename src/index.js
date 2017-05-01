import isFunc from './is-function';
import {decorators, annotations as annotes} from './bdd-decorators';
import getInheritedProps from './get-inherited-props';

export {
    runTest,
    decorators as bdd
};

function runTest(suite) {
    let proto = Object.getPrototypeOf(suite);
    let suiteName = proto.constructor.suiteName;
    let annotations = getAnnotatedValues(proto);

    let {beforeFunc, beforeEachFunc, afterFunc, testName} = annotations;

    describe(suiteName, () => {
        beforeFunc.forEach(beforeHook => before(beforeHook));
        beforeEachFunc.forEach(beforeEachHook => beforeEach(beforeEachHook));
        afterFunc.forEach(afterHook => after(afterHook));
        testName.forEach(test => it(test.testName, test));
    });
}

function getAnnotatedValues(suite) {
    let props = getInheritedProps(suite);
    let suiteData = getEmptyAnnotations();

    props.forEach(prop => {
        let method = suite[prop];
        if (!isFunc(method)) return;

        let methodProps = Object.keys(method);
        methodProps.forEach(prop => {
            let hasAnnote = annotations.includes(prop);
            if (hasAnnote) suiteData[prop].push(method.bind(suite));
        });
    });

    return suiteData;
}

const annotations = Object.keys(annotes).map(key => annotes[key]);

function getEmptyAnnotations() {
    return annotations.reduce((collection, annotationType) => {
        collection[annotationType] = [];
        return collection;
    }, {});
}
