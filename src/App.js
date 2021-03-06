import React from "react"
import "./index.css"

import { PreviewContextProvider } from "./contexts/PreviewContext"
import PreviewForm from "./components/PreviewForm"
import PreviewImage from "./components/PreviewImage"

export default function Home() {
    return (
        <div className="container">
            <main>
                <h1>GoAbroad Open Graph Image Service</h1>
                <PreviewContextProvider>
                    <div className="preview-container">
                        <PreviewForm />
                        <PreviewImage />
                    </div>
                </PreviewContextProvider>
            </main>
        </div>
    )
}
