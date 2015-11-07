export default function getAllProps(obj, props = []) {
    if (!obj) return props;

    Object.getOwnPropertyNames(obj).forEach(prop => {
        if (!props.includes(prop)) props.push(prop);
    });

    return getAllProps(Object.getPrototypeOf(obj), props);
}
