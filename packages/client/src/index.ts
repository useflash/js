import { HttpClient } from "./http";
import { endpoint, testEndpoint } from "./defaults";
import { Events } from "./natives";

class Useflash {
    protected httpClient: HttpClient;

    constructor(protected token: string, debug: boolean = false) {
        this.httpClient = new HttpClient(debug ? testEndpoint : endpoint);
    }

    public async fire(eventName: string, payload: Record<string, unknown> = {}) {
        return await this.httpClient.request("POST", `api/fire/${this.token}`, {
            name: eventName,
            payload
        })
    }

    public async heartbeat(payload: HeartbeatPayload = {}) {
        return await this.fire(Events.Heartbeat, payload)
    }
}

export { Useflash, Events }