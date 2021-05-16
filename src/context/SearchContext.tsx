import React, { createContext, useState } from "react"

interface SearchContext {
  searchInput: string
  activeTag: string
  setSearch: (term: string) => void
  setActiveTag: (tag: string) => void
  clearSearch: () => void
  clearTag: () => void
}

export const SearchContext = createContext<SearchContext>({} as SearchContext)

export const SearchContextProvider: React.FC = ({ children }) => {
  const [searchInput, _setSearchInput] = useState<string>("")
  const [activeTag, _setActiveTag] = useState<string>("")

  const setSearch = (newValue: string) => _setSearchInput(newValue)

  const setActiveTag = (newTag: string) => _setActiveTag(newTag)

  const clearSearch = () => _setSearchInput("")

  const clearTag = () => _setActiveTag("")

  const value: SearchContext = {
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
