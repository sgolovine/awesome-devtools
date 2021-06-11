import classNames from "classnames"
import React, { useContext } from "react"
import { SearchContext } from "~/context/SearchContext"

interface Props {
  title: string
  url: string
  description: string
  tags: string[]
}

const Card: React.FC<Props> = ({ title, url, description, tags }) => {
  const { activeTag, setActiveTag } = useContext(SearchContext)

  function getTagClassnames(item: string) {
    const active = item === activeTag?.name
    return classNames("shadow", "rounded-lg", "py-1", "px-3", "m-1", {
      "bg-theme-yellow": active,
      "bg-theme-white": !active,
    })
  }

  return (
    <div className="border shadow rounded-lg h-72 sm:w-72 p-4 m-2 overflow-hidden">
      <h1 className="text-lg font-bold text-theme-white">{title}</h1>
      <a href={url} className="text-sm text-theme-yellow hover:underline w-72">
        {url}
      </a>
      <p className="py-2 text-theme-white">{description}</p>
      <div className="flex flex-row flex-wrap py-4">
        {tags.map(item => {
          const buttonClasses = getTagClassnames(item)
          return (
            <button
              onClick={() => setActiveTag({ name: item, occurrence: 1 })}
              className={buttonClasses}
            >
              <p className="text-xs text-theme-dark font-bold">{item}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Card
