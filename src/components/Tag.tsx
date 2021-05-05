import React from "react"

interface Props {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => (
  <div className="shadow rounded-lg py-1 px-3 bg-blue-500 m-1">
    <p className="text-xs text-white font-bold">{children}</p>
  </div>
)

export default Tag
