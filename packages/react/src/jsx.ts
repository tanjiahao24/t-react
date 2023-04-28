import { REACT_ELEMENT_TPYE } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	ReactElement,
	Ref,
	Props,
	ElementType
} from 'shared/ReactTypes';
function ReactElement(
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement {
	const element = {
		$$typeof: REACT_ELEMENT_TPYE,
		type,
		key,
		ref,
		props,
		__flag: 'T'
	};
	return element;
}

export function jsx(type: ElementType, config: any, ...children: any) {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (let prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}

		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}

		if (config.hasOwnProperty(prop)) {
			props[prop] = val;
		}
	}
	return ReactElement(type, key, ref, props);
}

export const jsxDEV = jsx;
