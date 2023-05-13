import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const pkgPath = path.resolve(__dirname, '../../packages');
const disPath = path.resolve(__dirname, '../../dist/node_modules');

export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		return `${disPath}/${pkgName}`;
	}
	return `${pkgPath}/${pkgName}`;
}

export function getPackageJSON(pkgname) {
	const path = `${resolvePkgPath(pkgname)}/package.json`;
	const res = fs.readFileSync(path, { encoding: 'utf-8' });
	return JSON.parse(res);
}

export function getBaseRollupPlugins({
	alias = { ___DEV___: true },
	typescript = {}
} = {}) {
	return [replace(alias), cjs(), ts(typescript)];
}
