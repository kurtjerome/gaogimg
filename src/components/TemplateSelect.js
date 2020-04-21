import React from "react"

import { usePreview } from "../contexts/PreviewContext"

function TemplateSelect() {
    const { template, setTemplate } = usePreview()

    return (
        <div className="template-select">
            <Template
                label="Centered"
                active={template === "centered"}
                onClick={() => setTemplate("centered")}
                icon="/svg/centered-skeleton.svg"
            />
            <Template
                label="Banner"
                active={template === "banner"}
                onClick={() => setTemplate("banner")}
                icon="/svg/banner-skeleton.svg"
            />
            <Template
                label="FMT"
                active={template === "fmt"}
                onClick={() => setTemplate("fmt")}
                icon="/svg/centered-skeleton.svg"
            />
        </div>
    )
}

function Template({ active, onClick, label, icon }) {
    const className = active ? "active" : null

    return (
        <button className={className} onClick={onClick}>
            <img alt={label} src={icon} />
            <span>{label}</span>
        </button>
    )
}

export default TemplateSelect
