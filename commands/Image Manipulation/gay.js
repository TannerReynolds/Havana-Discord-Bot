

const argHandler = require("../../util/imgHandler.js")
module.exports = {
    command:"gay",
    description: "gay",
    syntax: ")>gay `|` )>gay [Attachment | User Name | User ID | User Mention | Image URL | Emoji ]",
    category: "Image Manipulation",
    permission: "sendMessages",
    botPermission: "attachFiles",
    execute:async (bot, msg, args, commands, logger, c, s) => {
        argHandler.handle(bot, msg, args, renderImage);
        async function renderImage(img) {
            s.get(`http://${c.havana}/canvas?url=${img}&effect=gay`).then(r => msg.channel.createMessage("", {file: r.body, name: "render.jpg"}))
        }
    }
}