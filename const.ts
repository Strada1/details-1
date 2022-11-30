export const ELEMENT: {
    BUTTON: Element | null,
    FIRST_INPUT: Element | null,
    SECOND_INPUT: Element | null,
    OPERATION: Element | null,
    RESULT: Element | null
} = {
	BUTTON: document.getElementById("btn"),
	FIRST_INPUT: document.getElementById("firstInput"),
	SECOND_INPUT: document.getElementById("secondInput"),
	OPERATION: document.getElementById("select"),
	RESULT: document.getElementById("calc_result")
};

export const OPERATION: {
    ADD: string,
    SUBSTRACT: string,
    MULTI: string,
    DIVIDE: string,
} = {
	ADD: "+",
	SUBSTRACT: "-",
	MULTI: "*",
	DIVIDE: "/"
};