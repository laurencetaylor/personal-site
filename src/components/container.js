import React from "react"
import containerStyles from "./container.module.css"

let liClasses = `${containerStyles.container} center`

export default ({ children }) => <div className={liClasses}>{children}</div>
