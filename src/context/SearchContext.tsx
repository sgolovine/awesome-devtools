import { graphql, useStaticQuery } from "gatsby"
import React, { createContext, useEffect, useState } from "react"
import { Tool } from "~/model/tool"

const getTagsWithCounts = (data: Tool[]) => {
  const _getCounts = (allTags: string[]) => {
    let counts = {}

    allTags.forEach((item: string) => {
      const countForItem = counts[item as keyof typeof counts]
        ? counts[item as keyof typeof counts] + 1
        : 1
      counts = {
        ...counts,
        [item]: countForItem,
      }
    })

    return counts
  }

  const allTags = data.reduce((acc: string[], item: Tool) => {
    return [...acc, ...item.tags]
  }, [])

  const tagCounts = _getCounts(allTags)

  const uniqueTagsWithCounts = [...new Set(allTags)].reduce(
    (acc: { tag: string; count: number }[], item: string) => {
      return [
        ...acc,
        {
          tag: item,
          count: tagCounts[item as keyof typeof tagCounts],
        },
      ]
    },
    []
  )
  return uniqueTagsWithCounts
}

interface SearchContext {
  tools: Tool[]
  searchInput: string
  activeTag: string
  setSearch: (term: string) => void
  setActiveTag: (tag: string) => void
  clearSearch: () => void
  clearTag: () => void
}

export const SearchContext = createContext<SearchContext>({} as SearchContext)

export const SearchContextProvider: React.FC = ({ children }) => {
  const query = useStaticQuery<{
    staticJson: {
      tools: Tool[]
    }
  }>(graphql`
    query {
      staticJson {
        tools {
          name
          description
          url
          tags
        }
      }
    }
  `)

  const { tools } = query.staticJson

  const [filteredTools, setFilteredTools] = useState<Tool[]>([])

  // LOGIC:
  // - Yank all tags from the data
  // - Get a unique set of tags
  // - For every tag in the unique set -> figure out # of occurrence in main set
  // - Return the name of the tag + the occurrence
  const [allTags, setAllTags] = useState<
    {
      name: string
      occurrence: number
    }[]
  >([])

  const [searchInput, _setSearchInput] = useState<string>("")
  const [activeTag, _setActiveTag] = useState<string>("")

  useEffect(() => {}, [searchInput])

  useEffect(() => {}, [activeTag])

  const setSearch = (newValue: string) => _setSearchInput(newValue)

  const setActiveTag = (newTag: string) => _setActiveTag(newTag)

  const clearSearch = () => _setSearchInput("")

  const clearTag = () => _setActiveTag("")

  const value: SearchContext = {
    tools: filteredTools,
    searchInput,
    activeTag,
    setSearch,
    setActiveTag,
    clearSearch,
    clearTag,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
