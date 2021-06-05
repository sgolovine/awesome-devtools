import { graphql, useStaticQuery } from "gatsby"
import React, { createContext, useEffect, useState } from "react"
import { Tag } from "~/model/tag"
import { Tool } from "~/model/tool"

const _filterOnSearchTerm = (tools: Tool[], searchTerm: string): Tool[] => {
  const regex = new RegExp(String.raw`${searchTerm}`)
  return tools.filter(tool => {
    if (tool.name.match(regex) || tool.name.toLowerCase().match(regex)) {
      return tool
    }
    if (
      tool.description.match(regex) ||
      tool.description.toLowerCase().match(regex)
    ) {
      return tool
    }
    if (tool.url.match(regex)) {
      return tool
    }
    if (tool.tags.filter(tag => tag.toLowerCase().match(regex)).length > 0) {
      return tool
    }
  })
}

const _getTagsWithCounts = (data: Tool[]): Tag[] => {
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
    (acc: Tag[], item: string) => {
      return [
        ...acc,
        {
          name: item,
          occurrence: tagCounts[item as keyof typeof tagCounts],
        },
      ]
    },
    []
  )
  return uniqueTagsWithCounts
}

interface SearchContext {
  tools: Tool[]
  tags: Tag[]
  searchInput: string
  activeTag: Tag | null
  setSearch: (term: string) => void
  setActiveTag: (tag: Tag) => void
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

  const [filteredTools, _setFilteredTools] = useState<Tool[]>([])

  const [allTags, _setAllTags] = useState<Tag[]>([])

  const [searchInput, _setSearchInput] = useState<string>("")
  const [activeTag, _setActiveTag] = useState<Tag | null>(null)

  // Set the tags from the data
  useEffect(() => {
    const tags = _getTagsWithCounts(tools)
    _setAllTags(tags)
    _setFilteredTools(tools)
  }, [])

  useEffect(() => {
    if (searchInput) {
      const filteredTools = _filterOnSearchTerm(tools, searchInput)
      _setFilteredTools(filteredTools)
      _setActiveTag(null)
    } else {
      _setFilteredTools(tools)
    }
  }, [searchInput])

  useEffect(() => {
    if (activeTag) {
      const filteredTools = tools.filter(tool =>
        tool.tags.includes(activeTag.name)
      )
      _setFilteredTools(filteredTools)
    } else {
      _setFilteredTools(tools)
    }
  }, [activeTag])

  const setSearch = (newValue: string) => _setSearchInput(newValue)

  const setActiveTag = (newTag: Tag) => _setActiveTag(newTag)

  const clearSearch = () => _setSearchInput("")

  const clearTag = () => _setActiveTag(null)

  const value: SearchContext = {
    tools: filteredTools,
    tags: allTags,
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
