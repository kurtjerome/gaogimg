import React from "react"

import { usePreview } from "../contexts/PreviewContext"
import TemplateSelect from "./TemplateSelect"

function PreviewForm() {
    const preview = usePreview()

    return (
        <div className="preview-form-container">
            <div className="form-field">
                <label htmlFor="template">Template</label>
                <TemplateSelect />
            </div>
            <div className="form-field">
                <label htmlFor="brand">Brand</label>
                <input
                    type="text"
                    id="brand"
                    value={preview.brand}
                    onChange={(e) => preview.setBrand(e.target.value)}
                    placeholder="GoAbroad.com"
                />
            </div>
            <div className="form-field">
                <label htmlFor="h1">Heading</label>
                <input
                    type="text"
                    id="h1"
                    value={preview.h1}
                    onChange={(e) => preview.setH1(e.target.value)}
                    placeholder="Enter an eye-catching heading"
                />
            </div>
            <div className="form-field">
                <label htmlFor="h2">Subheading</label>
                <input
                    type="text"
                    id="h2"
                    value={preview.h2}
                    onChange={(e) => preview.setH2(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="bg">Background</label>
                <input
                    type="text"
                    id="bg"
                    value={preview.bg}
                    onChange={(e) => preview.setBg(e.target.value)}
                    placeholder="Paste image url (e.g. http://image.com/...)"
                />
            </div>
            <div className="form-field">
                <label htmlFor="width">Dimensions</label>
                <div className="dimensions">
                    <input
                        type="number"
                        id="width"
                        value={preview.width}
                        onChange={(e) => preview.setWidth(e.target.value)}
                        placeholder="1200"
                    />
                    <div className="by" />
                    <input
                        type="number"
                        id="height"
                        value={preview.height}
                        onChange={(e) => preview.setHeight(e.target.value)}
                        placeholder="630"
                    />
                </div>
            </div>
        </div>
    )
}

export default PreviewForm
