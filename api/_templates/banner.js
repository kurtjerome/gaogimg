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
            bottom: 0;
            left: 0;
            right: 0;
            padding: 60px 40px 40px;
            display: flex;
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }

        .copy {
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding-right: 20px;
            text-shadow: 0 2px 3px #000;
        }
        
        .brand {
            margin: 0;
            font-size: 28px;
        }

        h1 {
            margin: 15px 0 0;
            font-size: 48px;
        }

        h2 {
            margin: 15px 0 0;
            font-size: 36px;
            font-weight: normal;
        }

        .logo-container {
            flex: 1;
            text-align: end;
            align-self: flex-end;
        }
    `
}

function getBody({ h1, h2, brand }) {
    const brandHTML = getBrand(brand)
    const h1HTML = getH1(h1)
    const h2HTML = getH2(h2)

    return `
        <div class="container">
            <div class="copy">
                ${brandHTML}
                ${h1HTML}
                ${h2HTML}
            </div>
            <div class="logo-container">
                <img src="https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/w_160,h_123/v2/images2/galogo.png" />
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
