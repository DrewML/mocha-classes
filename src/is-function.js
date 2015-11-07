export default function isFunc(val) {
    return val && Object.prototype.toString.call(val) === '[object Function]';
}
