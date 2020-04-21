import { readFileSync } from "fs"

const InterRegular = readFileSync(
    `${__dirname}/../_fonts/Inter-Regular.woff2`
).toString("base64")

const InterBold = readFileSync(
    `${__dirname}/../_fonts/Inter-Bold.woff2`
).toString("base64")

export function getHTML({ h1, h2, brand, logo, bg }) {
    const css = getCSS({ bg })
    const body = getBody({ h1, h2, brand })

    return `
        <!DOCTYPE html>
        <html>
            <meta charset="utf-8">
            <title>Generated Image</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>${css}</style>
            <body>${body}</body>
        </html>
    `
}

function getCSS({ bg }) {
    return `
        @font-face {
            font-family: 'GA-Inter';
            font-style:  normal;
            font-weight: normal;
            src: url(data:font/woff2;charset=utf-8;base64,${InterRegular}) format('woff2');
        }

        @font-face {
            font-family: 'GA-Inter';
            font-style:  normal;
            font-weight: bold;
            src: url(data:font/woff2;charset=utf-8;base64,${InterBold}) format('woff2');
        }

        body {
            height: 100vh;
            background-color: #000;
            background-size: cover;
            background-position: center;
            background-image: url(${bg});
            margin: 0;
            color: #fff;
            font-family: GA-Inter, sans-serif;
        }

        .container {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 60px 40px 40px;
            background-color: rgba(0, 0, 0, 0.4);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .copy {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            text-shadow: 0 2px 3px #000;
        }
        
        .brand {
            margin: 15px 0 0;
            font-size: 28px;
        }

        h1 {
            margin: 25px 0 0;
            font-size: 64px;
        }

        h2 {
            margin: 25px 0 0;
            font-size: 48px;
            font-weight: normal;
            max-width: 28ch;
        }
    `
}

function getBody({ h1, h2, brand }) {
    const brandHTML = getBrand(brand)
    const h1HTML = getH1(h1)
    const h2HTML = getH2(h2)

    return `
        <div class="container">
            <div class="logo-container">
                <img src="https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/w_160,h_123/v2/images2/galogo.png" />
            </div>
            <div class="copy">
                ${brandHTML}
                ${h1HTML}
                ${h2HTML}
            </div>
        </div>
    `
}

function getBrand(brand) {
    if (!brand) {
        return ""
    }

    return `<p class="brand">${brand}</p>`
}

function getH1(h1) {
    if (!h1) {
        return ""
    }

    return `<h1>${h1}</h1>`
}

function getH2(h2) {
    if (!h2) {
        return ""
    }

    return `<h2>${h2}</h2>`
}
