export function to(promise: Promise<any>): Promise<any[]> {
	return promise
		.then((data) => {
			return [null, data];
		})
		.catch((error) => [error]);
}
