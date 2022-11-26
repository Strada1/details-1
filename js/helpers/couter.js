export function counter(startNumber) {
	let number = startNumber

	return () => {
		return number++
	}
}