import React from "react"
import { navigate } from "gatsby"
import { ISSUE_LINK } from "~/contants/links"
import SearchBar from "./SearchBar"

const Header: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center sm:px-2 md:px-12">
      <div className="pt-12">
        <h1 className="text-5xl font-bold">Awesome Devtools</h1>
        <p className="text-lg py-2 max-w-lg">
          A collection of awesome devtools from around the internet
        </p>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center">
        <button
          onClick={() => navigate(ISSUE_LINK)}
          className="py-2 px-4 rounded shadow bg-blue-500 text-white font-bold text-sm md:text-md lg:text-lg"
        >
          Submit a Devtool
        </button>
        <div className="px-5 py-3">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header
