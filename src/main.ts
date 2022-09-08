import memoize from "./memoize";
import json from "./test.json"
export default {
    a: 'b',
    c: 'd',
    test: memoize((a) => a),
    as: import('./as').then(x => x.default(1))
}
console.log(json)