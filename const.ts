export  const ELEMENTS: {
    FIRST_NUMBER: Element | null,
    SECOND_NUMBER: Element | null,
    CALC: Element | null, 
    EQUALS: Element | null, 
    RESULT: Element | null
} = {
    FIRST_NUMBER: document.querySelector('#first-number'),
    SECOND_NUMBER: document.querySelector('#second-number'),
    CALC: document.querySelector('#calc'),
    EQUALS: document.querySelector('#btn'),
    RESULT: document.querySelector('#result'),
}

export const SYMBOL: {ADD: string, SUB: string, DEL: string, MULTI: string} = {
    ADD: '+',
    SUB: '-',
    DEL: '/',
    MULTI: '*'
}
