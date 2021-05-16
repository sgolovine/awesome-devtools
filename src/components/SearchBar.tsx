import React from "react"
import BackspaceIcon from "./icons/Backspace"

interface Props {}

const SearchBar: React.FC<Props> = ({}) => {
  return (
    <form method="GET">
      <div className="relative">
        <input
          type="search"
          name="q"
          className="py-2 pr-10 text-sm rounded-md pl-2 focus:border-blue-500 border shadow"
          placeholder="Search..."
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <BackspaceIcon />
          </button>
        </span>
      </div>
    </form>
  )
}

export default SearchBar
