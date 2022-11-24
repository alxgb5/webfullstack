import * as fs from 'fs';
import * as path from 'path';
import * as child_process from 'child_process';

const exec = child_process.exec;
const libPath = path.join('..', 'my-lib-ui');
const vitrinePath = path.join('..', 'vitrine');

await exec(`cd ${libPath} && npm run rollup && yalc publish && cd ${vitrinePath} && yalc update && npm i`, function (error) { console.log(error); });

// await exec(`npm run rollup`, (event) => { console.log(`npm run rollup`, event); }, (error) => { console.log(error); });
// await exec(`yalc publish`, (event) => { console.log(`yalc publish`, event); }, (error) => { console.log(error); });
// await exec(`cd ${vitrinePath}`, (event) => { console.log(`cd ${vitrinePath}`, event); }, (error) => { console.log(error); });
// await exec(`yalc update`, (event) => { console.log(`yalc update`, event); }, (error) => { console.log(error); });
// await exec(`npm i`, (event) => { console.log(`npm i`, event); }, (error) => { console.log(error); });