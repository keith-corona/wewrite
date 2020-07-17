import React from "react"
import blockStyles from "./block.module.css"

export default ({children}) => (
    <div className={blockStyles.block}>{children}</div>
)
