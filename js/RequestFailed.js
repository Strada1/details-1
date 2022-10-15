export class RequestFailed extends Error {
	constructor(message) {
		super(message);
		this.name = 'RequestFail';
		this.stack = new Error().stack();
	}
}