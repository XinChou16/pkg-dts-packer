"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remote_1 = require("./remote");
test('getRealVersion', async () => {
    console.log('foo');
    await remote_1.getRealVersion({
        name: 'antd',
        version: '3.26.20',
    });
});
