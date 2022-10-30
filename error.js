class BaseError extends Error {
	constructor(message) {
		super(message)
		this.name = this.constructor.name
	}
}

export class ReadError extends Error {
	constructor(message, cause) {
		super(message)
		this.name = 'ReadError'
		this.cause = cause
	}
}

export class ApiError extends BaseError {
	constructor(message) {
		super(message)
	}
}

export class NotFound extends BaseError {
	constructor(message) {
		super(message)
	}
}

export const ERROR_CODE = {
	NOT_FOUND: 404,
	API_KEY: 401,
}

