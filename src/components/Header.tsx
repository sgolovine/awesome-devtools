import React, { ReactNode } from "react"
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
}) => (
  <div className="flex flex-col md:flex-row justify-between items-center sm:px-2 md:px-12">
    <div className="py-12">
      <h1 className="text-5xl font-bold">{headerText}</h1>
      {customSubheader ? (
        customSubheader()
      ) : (
        <p className="text-lg py-2">{subheaderText}</p>
      )}
    </div>
    {!hideSubmitButton && (
      <button className="p-4 rounded shadow bg-blue-500 text-white font-bold text-lg">
        Submit a Devtool
      </button>
    )}
  </div>
)

export default Header
