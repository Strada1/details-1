import { MESSAGES_DISPLAY } from "./elements.js"

export function getScrollPosition() {
	const scrollTopValue = -MESSAGES_DISPLAY.scrollTop;
	const displayHeight = MESSAGES_DISPLAY.clientHeight;
	const displayScrollHeight = MESSAGES_DISPLAY.scrollHeight;
	const isScrolledToTop = (scrollTopValue + displayHeight) === displayScrollHeight;
	
	return isScrolledToTop;
}