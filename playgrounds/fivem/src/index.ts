import { Useflash, Events } from "@useflash/client";

const analytics = () => {
    const token = GetResourceMetadata("useflash", "credentials", 0)

    return new Useflash(token, true)
}

on("onServerResourceStart", async () => {
    const client = analytics();

    client.fire(Events.ServerStarted).then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error)
    })
})