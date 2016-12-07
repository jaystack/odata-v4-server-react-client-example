import * as queryString from "query-string";

export const HOST = "http://odata-v4-demo.jaystack.net/api";
const headers = new Headers({"Content-Type": "application/json"});

async function resolveDocs(response) {
	const text = await response.text();
	if (!text)
		return null;
	const json = JSON.parse(text);
	return json.value ? json.value : json;
}

async function call(method, url, content) {
	const isContent = content && Object.keys(content).length > 0;
	if (method === 'GET')
		return await fetch(`${HOST}${url}${isContent ? '?'+queryString.stringify(content) : ''}`, { method, headers }).then(resolveDocs);
	else
		return await fetch(`${HOST}${url}`, { method, headers, body: JSON.stringify(content) }).then(resolveDocs);
}

export default {
	get: (...args) => call("GET", ...args),
	post: (...args) => call("POST", ...args),
	put: (...args) => call("PUT", ...args),
	patch: (...args) => call("PATCH", ...args),
	delete: (...args) => call("DELETE", ...args)
};