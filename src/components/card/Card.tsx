import React from "react"
import Tag from "./Tag"

interface Props {
  title: string
  url: string
  description: string
  tags: string[]
}

const Card: React.FC<Props> = ({ title, url, description, tags }) => (
  <div className="border shadow rounded-lg h-72 sm:w-72 p-4 m-2 overflow-hidden">
    <h1 className="text-lg font-bold">{title}</h1>
    <a href={url} className="text-sm text-blue-500 hover:underline w-72">
      {url}
    </a>
    <p className="py-2">{description}</p>
    <div className="flex flex-row flex-wrap py-4">
      {tags.map(item => {
        return <Tag key={item}>{item}</Tag>
      })}
    </div>
  </div>
)

export default Card
