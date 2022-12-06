import { Events } from "@useflash/client";
import { NetworkEventConstants } from "./constants";

let heartbit: NodeJS.Timeout | null = null;

export default () => {
    const startHeartbitInterval = () => {
        heartbit = setInterval(async () => {
            console.log("[Flash Analytics] Heartbeating...")

            emit(NetworkEventConstants.Heartbeat, {
                online: getPlayers().length
            })
        }, 10000)
    }

    on("onServerResourceStart", async () => {
        startHeartbitInterval()

        emit(NetworkEventConstants.Fire, Events.ServerStarted)
    })

    on("onServerResourceStop", () => {
        if (heartbit !== null) {
            clearInterval(heartbit)
        }

        emit(NetworkEventConstants.Fire, Events.ServerStopped)
    })
}
