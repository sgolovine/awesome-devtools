/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import "./src/styles/tailwind.css"
import "./src/styles/global.css"
import { SearchContextProvider } from "./src/context/SearchContext"

export const wrapRootElement = ({ element }) => {
  return <SearchContextProvider>{element}</SearchContextProvider>
}
