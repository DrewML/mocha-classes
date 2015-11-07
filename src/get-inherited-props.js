export default function getInheritedProps(obj, props = []) {
    if (!obj) return props;

    Object.getOwnPropertyNames(obj).forEach(prop => {
        if (!props.includes(prop)) props.push(prop);
    });

    return getInheritedProps(Object.getPrototypeOf(obj), props);
}
