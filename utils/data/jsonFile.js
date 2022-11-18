import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const packageData = require('../../package.json');

export default packageData;
