const supportSymbol = typeof Symbol === 'function' && Symbol.for;
export const REACT_ELEMENT_TPYE = supportSymbol
	? Symbol.for('react.element')
	: 0xfea0;
