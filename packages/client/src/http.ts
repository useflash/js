import { ofetch } from "ofetch";
import { endpoint as defaultEndpoint } from "./defaults";

class HttpClient {
    constructor( protected endpoint: string = defaultEndpoint) {
    }

    public async request(method: string, uri: string, body: BodyInit | Record<string, unknown> | null = {}) {
        return await ofetch(uri, {
            baseURL: this.endpoint,
            method,
            body
        })
    }

}

export { HttpClient }