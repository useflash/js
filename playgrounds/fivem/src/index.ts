import { Useflash } from "@useflash/client";
import { NetworkEventConstants } from "./constants";
import heartbeat from "./heartbeat";

const analytics = () => {
    const token = GetResourceMetadata("useflash", "credentials", 0)

    return new Useflash(token, true)
}

const client = analytics();

/**
 * Network events for firing Flash Analytics endpoint
 */
onNet(NetworkEventConstants.Fire, async (eventName: string, payload: Record<string, unknown>) => {
    await client.fire(eventName, payload)
})
onNet(NetworkEventConstants.Heartbeat, async (payload: Record<string, unknown>) => {
    await client.heartbeat(payload)
})

/**
 * Run heartbeat polling
 */
heartbeat()