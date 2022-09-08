import memoize from './memoize';

import('./as').then(({default: x}) => memoize(x)(1))