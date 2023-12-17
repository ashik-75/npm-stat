const api_url = import.meta.env.VITE_API_URL;
const proxy = import.meta.env.DEV ? `https://cors-anywhere.herokuapp.com/` : "";

// console.log(import.meta.env.MODE);

interface ClientOptions {
  data?: Record<string, string>;
  token?: string;
  headers?: Record<string, string>;
  root?: string;
}

const client = async (
  endpoint: string,
  {
    data,
    token,
    headers: customHeaders,
    root,
    ...customConfig
  }: ClientOptions = {},
) => {
  const access_token = import.meta.env.VITE_ACCESS_TOKEN ?? token;

  const config: RequestInit = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: access_token ? `Bearer ${access_token}` : "",
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": data ? "application/json" : "",
      ...customHeaders,
    },
    ...customConfig,
  };

  const url = root ? `${root}/${endpoint}` : `${api_url}/${endpoint}`;
  const response = await fetch(`${proxy}${url}`, config);

  if (response.ok) {
    return response.json();
  } else {
    const errorData = await response.json();
    return Promise.reject(errorData);
  }
};

export { client };
