"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replaceImports_1 = require("./replaceImports");
test('imports', () => {
    const ret = replaceImports_1.replaceImports({
        content: `
import a from 'a';
import b from './b';
`.trim(),
        prefix: '@foo/bar/',
    });
    expect(ret).toEqual({
        content: "import a from '@foo/bar/a';\nimport b from './b';",
        depImports: ['a'],
        localImports: ['./b'],
    });
});
test('externals', () => {
    const ret = replaceImports_1.replaceImports({
        content: `
import a from 'foo';
import a from 'bar';
`.trim(),
        prefix: '@foo/bar/',
        externals: {
            foo: 'hhh',
        },
    });
    expect(ret).toEqual({
        content: "import a from 'hhh';\nimport a from '@foo/bar/bar';",
        depImports: ['bar'],
        localImports: [],
    });
});
test('import ignore node modules', () => {
    const ret = replaceImports_1.replaceImports({
        content: `
import a from 'fs';
`.trim(),
        prefix: '@foo/bar/',
    });
    expect(ret).toEqual({
        content: "import a from 'fs';",
        depImports: [],
        localImports: [],
    });
});
test('dynamic import', () => {
    const ret = replaceImports_1.replaceImports({
        content: `
export function foo() {}: import('a').File;
`.trim(),
        prefix: '@foo/bar/',
    });
    expect(ret).toEqual({
        content: "export function foo() {}: import('@foo/bar/a').File;",
        depImports: ['a'],
        localImports: [],
    });
});
test('require', () => {
    const ret = replaceImports_1.replaceImports({
        content: `
import a = require('a');
import b = require('./b');
`.trim(),
        prefix: '@foo/bar/',
    });
    expect(ret).toEqual({
        content: "import a = require('@foo/bar/a');\nimport b = require('./b');",
        depImports: ['a'],
        localImports: ['./b'],
    });
});
