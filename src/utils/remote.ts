import assert from 'assert';
import got from 'got';

const UNPKG_SERVER = 'https://unpkg.alibaba-inc.com';

export async function readFile(opts) {
    const url = `${UNPKG_SERVER}/${opts.name}@${opts.version}/${opts.file}`;
    const res = await got(url, {
        followRedirect: true,
    });
    assert(res.statusCode === 200, `文件 ${opts.name}/${opts.version}/${opts.file} 不存在`);
    return res.body;
}

export async function existsFile(opts) {
    const url = `${UNPKG_SERVER}/browse/${opts.name}@${opts.version}/${opts.file}`;
    try {
        await got(url, {
            followRedirect: false,
        });
        return true;
    }
    catch (_e) {
        return false;
    }
}

export async function getRealVersion(opts) {
    const url = `${UNPKG_SERVER}/browse/${opts.name}@${opts.version}/`;
    try {
        const res = await got(url, {
            method: 'HEAD',
            followRedirect: false,
        });
        console.log(res.statusCode);
        console.log(res.headers);
    }
    catch (e) {
        console.log('error');
    }
}
