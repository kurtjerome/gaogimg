import { parse } from "url"

export function parseRequest(req) {
    const { query } = parse(req.url || "/", true)

    const { h1, h2, brand, logo, bg, width, height, debug } = query || {}

    return {
        h1,
        h2,
        brand,
        logo,
        bg,
        debug,
        width: width && parseInt(width),
        height: height && parseInt(height),
    }
}
