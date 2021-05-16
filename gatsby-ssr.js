/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/tailwind.css"
import { SearchContextProvider } from "./src/context/SearchContext"

export const wrapRootElement = ({ element }) => {
  return <SearchContextProvider>{element}</SearchContextProvider>
}
