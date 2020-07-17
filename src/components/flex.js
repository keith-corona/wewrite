import React from "react"
import flexStyles from "./flex.module.css"

export default ({children}) => (
    <div className={flexStyles.flex}>{children}</div>
)