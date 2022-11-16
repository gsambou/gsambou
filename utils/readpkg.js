import { readFile } from 'fs/promises';

const relativePath = '../package.json';

const packageJson = JSON.parse(await readFile(new URL(relativePath, import.meta.url)));

export default packageJson;
