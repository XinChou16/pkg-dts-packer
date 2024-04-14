import process from 'process';
import yargs from 'yargs-parser';
import { Package } from './Package';

const args = yargs(process.argv.slice(2), {});
const cwd = process.cwd();

new Package({
    cwd,
    name: args.name,
});