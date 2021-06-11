import React from "react"
import { Tag } from "~/model/tag"

interface Props {
  tags: Tag[]
  activeTag: Tag | null
  toggleTag: (tag: Tag) => void
  clearTag: () => void
}
const TagCloud: React.FC<Props> = ({
  tags,
  activeTag,
  toggleTag,
  clearTag,
}) => {
  return (
    <div className="mb-6 sm:px-4 md:px-12">
      {tags.map((tag: Tag) => {
        const tagActive = tag.name === activeTag?.name
        // TODO: Migrate to classnames
        const color = tagActive ? "bg-theme-yellow" : "bg-theme-white"

        return (
          <button
            onClick={() => (tagActive ? clearTag() : toggleTag(tag))}
            className={`${color} font-bold text-theme-dark mx-1 my-1 px-2 py-1 rounded shadow`}
            key={tag.name}
          >
            <span className="flex flex-row items-start">
              <span className="text-sm">{tag.name}</span>
              <span className="bg-theme-yellow text-theme-dark mx-2 px-1 shadow rounded text-sm">
                {tag.occurrence}
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default TagCloud
