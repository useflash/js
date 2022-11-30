import { Useflash, Events } from "@useflash/client";

const analytics = () => {
    const token = GetResourceMetadata("useflash", "settings", 0)

    return new Useflash(token)
}

on("onServerResourceStart", async () => {
    const client = analytics();

    client.fire(Events.ServerStarted).then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error)
    })
})