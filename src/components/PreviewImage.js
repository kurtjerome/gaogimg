import React, { useState, useEffect } from "react"
import { toClipboard } from "copee"

import { usePreview } from "../contexts/PreviewContext"

const BASE_URL = process.env.NOW_URL || `http://localhost:3000`

function PreviewImage() {
    const { url } = usePreview()
    const [loading, setLoading] = useState(false)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        setCopied(false)
        if (!isCached(url)) {
            setLoading(true)
        }
    }, [url])

    const onLoad = () => setLoading(false)
    const onError = () => setLoading(false)

    const style = {
        filter: loading ? "blur(5px)" : undefined,
        opacity: loading ? 0.75 : 1,
        pointerEvents: loading ? "none" : "all",
    }

    return (
        <div className="preview-image-container">
            {copied ? (
                <p className="animated pulse">
                    <span className="check" /> Copied url to clipboard!
                </p>
            ) : loading ? (
                <p>Loading...</p>
            ) : (
                <p>Click image to copy url</p>
            )}
            <img
                width="600"
                alt="Generated"
                src={url}
                style={style}
                onLoad={onLoad}
                onError={onError}
                onClick={(e) => {
                    e.preventDefault()
                    toClipboard(BASE_URL + url)
                    setCopied(true)
                }}
            />
        </div>
    )
}

function isCached(src) {
    var image = new Image()
    image.src = src

    return image.complete
}

export default PreviewImage
