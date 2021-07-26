#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkgJSON = require('./package.json');

welcome({
    title: pkgJSON.name,
    tagLine: `Hello nice to meet u`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
})

console.log(`gsambou
Data Protection Officer - Chargé Protection des données
- Twitter: https://twitter.com/g_sambou
- GitHub: https://github.com/gsambou
- Blog: https://gsambou.com
`);
