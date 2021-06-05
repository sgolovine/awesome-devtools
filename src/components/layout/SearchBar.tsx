import React, { useContext } from "react"
import { SearchContext } from "~/context/SearchContext"
import BackspaceIcon from "../icons/Backspace"

const SearchBar: React.FC = () => {
  const searchContext = useContext(SearchContext)

  return (
    <div className="relative">
      <input
        className="py-2 pr-10 text-sm rounded-md pl-2 focus:border-blue-500 border shadow"
        placeholder="Search for devtools..."
        value={searchContext.searchInput}
        onChange={e => searchContext.setSearch(e.target.value)}
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-2">
        <button
          onClick={() => searchContext.clearSearch()}
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <BackspaceIcon />
        </button>
      </span>
    </div>
  )
}

export default SearchBar
