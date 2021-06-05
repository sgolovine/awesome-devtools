import React, { useContext, useState } from "react"
import Footer from "./Footer"
import SubmitModal from "../submit/SubmitModal"
import TagCloud from "./TagCloud"
import { SearchContext } from "~/context/SearchContext"

interface Props {
  hideControls?: boolean
}

export const Layout: React.FC<Props> = ({ children, hideControls = false }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const {
    tags,
    activeTag,
    setActiveTag,
    clearTag,
    searchInput,
    setSearch,
  } = useContext(SearchContext)

  const renderTagCloud = () => (
    <div className="py-5 mx-auto">
      <TagCloud
        tags={tags}
        activeTag={activeTag}
        toggleTag={setActiveTag}
        clearTag={clearTag}
      />
    </div>
  )

  const renderSearchAndSubmit = () => (
    <div className="px-12 mx-auto flex flex-col md:flex-row">
      <input
        value={searchInput}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for devtools..."
        className="border rounded shadow p-2 flex-grow mr-2 text-lg"
      />
      <button
        onClick={() => setModalOpen(true)}
        className="py-2 px-4 mt-2 md:mt-0 rounded shadow bg-blue-500 text-white font-bold text-sm md:text-md lg:text-lg"
      >
        Submit a Devtool
      </button>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto">
      <header className="py-5 text-center">
        {/* Main header */}
        <h1 className="text-4xl font-bold pb-5">Awesome Devtools</h1>
        <p>A collection of awesome devtools from around the internet</p>

        {/* Tag Cloud */}
        {!hideControls && renderTagCloud()}

        {/* Search & Submit */}
        {!hideControls && renderSearchAndSubmit()}
      </header>

      {/* Primary Content */}
      <main className="mx-auto">{children}</main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
      <SubmitModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
