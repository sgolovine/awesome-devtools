import React from "react"
import { navigate } from "gatsby"
import { ISSUE_LINK } from "~/contants/links"
interface Props {
  headerText: string
  subheaderText: string
  hideSubmitButton?: boolean
  customSubheader?: () => JSX.Element
}

const Header: React.FC<Props> = ({
  hideSubmitButton = false,
  headerText,
  subheaderText,
  customSubheader,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center sm:px-2 md:px-12">
      <div className="pt-12">
        <h1 className="text-5xl font-bold">{headerText}</h1>
        {customSubheader ? (
          customSubheader()
        ) : (
          <p className="text-lg py-2 max-w-lg">{subheaderText}</p>
        )}
      </div>
      {!hideSubmitButton && (
        <button
          onClick={() => navigate(ISSUE_LINK)}
          className="p-4 rounded shadow bg-blue-500 text-white font-bold text-lg"
        >
          Submit a Devtool
        </button>
      )}
    </div>
  )
}

export default Header
