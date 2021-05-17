import React from "react"
import { Tag } from "~/model/tag"

interface Props {
  tags: Tag[]
  activeTag: string
  toggleTag: (tag: Tag) => void
}
const TagCloud: React.FC<Props> = ({ tags, activeTag, toggleTag }) => {
  return (
    <div className="mb-6 max-w-7xl">
      {tags.map((tag: Tag) => {
        const tagActive = tag.name === activeTag
        const color = tagActive ? "bg-green-500" : "bg-blue-500"
        return (
          <button
            onClick={() => toggleTag(tag)}
            className={`${color} font-bold text-white mx-1 my-1 px-2 py-1 rounded shadow`}
            key={tag.name}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}

export default TagCloud
