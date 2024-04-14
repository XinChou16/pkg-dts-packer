export function getFlattedName(name) {
    return name.replace('/', '__');
}

export function getTypedName(name) {
    return `@types/${name.replace(/^@/, '').replace('/', '__')}`;
}

export function getTypesFormMain({ main }) {
    if (main.endsWith('.js')) {
        return main.replace(/\.js$/, '.d.ts');
    }
    else {
        return `${main}.d.ts`;
    }
}
export function isRelative(path) {
    return path.charAt(0) === '.';
}
