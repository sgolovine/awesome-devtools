import React from "react"
import { navigate } from "gatsby"
import SearchBar from "./SearchBar"
import { DEFAULT_HEADER_TEXT } from "~/contants/header"

interface Props {
  hideSubmitButton?: boolean
  hideSearchBar?: boolean
  headerText?: string
  subheaderText?: string
}

const Header: React.FC<Props> = ({
  hideSubmitButton,
  headerText,
  subheaderText,
  hideSearchBar,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center sm:px-2 md:px-12">
      <div className="pt-12">
        <h1 className="text-5xl font-bold">
          {headerText ?? DEFAULT_HEADER_TEXT}
        </h1>
        {subheaderText && (
          <p className="text-lg py-2 max-w-lg">{subheaderText}</p>
        )}
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center">
        {!hideSubmitButton && (
          <button
            onClick={() => navigate("/submit")}
            className="py-2 px-4 rounded shadow bg-blue-500 text-white font-bold text-sm md:text-md lg:text-lg"
          >
            Submit a Devtool
          </button>
        )}
        {!hideSearchBar && (
          <div className="px-5 py-3">
            <SearchBar />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
