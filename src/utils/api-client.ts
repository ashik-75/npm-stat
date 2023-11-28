const api_url = import.meta.env.VITE_API_URL;

interface ClientOptions {
	data?: Record<string, string>;
	token?: string;
	headers?: Record<string, string>;
}

const client = (
	endpoint: string,
	{ data, token, headers: customHeaders, ...customConfig }: ClientOptions = {}
) => {
	const access_token = import.meta.env.VITE_ACCESS_TOKEN ?? token;

	const config: RequestInit = {
		method: data ? "POST" : "GET",
		body: data ? JSON.stringify(data) : undefined,
		headers: {
			Authorization: access_token ? `Bearer ${access_token}` : "",
			"Content-Type": data ? "application/json" : "",
			...customHeaders,
		},
		...customConfig,
	};

	return window
		.fetch(`${api_url}/${endpoint}`, config)
		.then(async (response) => {
			const data = await response.json();
			if (response.ok) {
				return data;
			} else {
				return Promise.reject(data);
			}
		});
};

export { client };
