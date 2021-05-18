import React, { useContext } from "react"
import { SearchContext } from "~/context/SearchContext"

interface Props {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const { activeTag } = useContext(SearchContext)
  const active = children === activeTag?.name
  // TODO: Move this to use classnames
  const bg = active ? "bg-green-500" : "bg-blue-500"
  return (
    <div className={`shadow rounded-lg py-1 px-3 ${bg} m-1`}>
      <p className="text-xs text-white font-bold">{children}</p>
    </div>
  )
}

export default Tag
