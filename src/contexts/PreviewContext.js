import React, { useContext, useState, createContext, useEffect } from "react"

import useDebounce from "../hooks/useDebounce"

const PreviewContext = createContext()
const usePreview = () => useContext(PreviewContext)

const PreviewContextProvider = (props) => {
    const [template, setTemplate] = useState("centered")
    const [bg, setBg] = useState("")
    const [h1, setH1] = useState("")
    const [h2, setH2] = useState("")
    const [brand, setBrand] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")
    const [url, setUrl] = useState(getUrl({ bg, h1, h2, brand }))

    const debouncedTemplate = useDebounce(template, 500)
    const debouncedBg = useDebounce(bg, 500)
    const debouncedH1 = useDebounce(h1, 500)
    const debouncedH2 = useDebounce(h2, 500)
    const debouncedBrand = useDebounce(brand, 500)
    const debouncedWidth = useDebounce(width, 500)
    const debouncedHeight = useDebounce(height, 500)

    useEffect(() => {
        setUrl(
            getUrl({
                template: debouncedTemplate,
                bg: debouncedBg,
                h1: debouncedH1,
                h2: debouncedH2,
                brand: debouncedBrand,
                width: debouncedWidth,
                height: debouncedHeight,
            })
        )
    }, [
        debouncedTemplate,
        debouncedBg,
        debouncedH1,
        debouncedH2,
        debouncedBrand,
        debouncedWidth,
        debouncedHeight,
    ])

    const contextValue = {
        template,
        setTemplate,
        brand,
        setBrand,
        h1,
        setH1,
        h2,
        setH2,
        bg,
        setBg,
        width,
        setWidth,
        height,
        setHeight,
        url,
    }

    return <PreviewContext.Provider value={contextValue} {...props} />
}

function getUrl({ template, ...params }) {
    const queryString = Object.keys(params)
        .map(
            (key) => params[key] && key + "=" + encodeURIComponent(params[key])
        )
        .filter(Boolean)
        .join("&")

    return `/api/${template}?${queryString}`
}

export { PreviewContextProvider, usePreview }
