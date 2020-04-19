import { getHTML } from "./_templates/centered"
import { parseRequest } from "./_utils/parser"
import { getScreenshot } from "./_utils/chromium"

const isDev = process.env.NOW_REGION === "dev1"

export default async function handler(req, res) {
    try {
        const parsedRequest = parseRequest(req)
        const html = getHTML(parsedRequest)

        if (parsedRequest.debug === "1") {
            res.send(html)

            return
        }

        const { width = 1200, height = 630 } = parsedRequest
        const file = await getScreenshot({ html, width, height, isDev })

        res.statusCode = 200
        res.setHeader("Content-Type", `image/jpeg`)
        res.setHeader(
            "Cache-Control",
            `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
        )
        res.end(file)
    } catch (e) {
        res.statusCode = 500
        res.setHeader("Content-Type", "text/html")
        res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>")

        console.error(e)
    }
}
