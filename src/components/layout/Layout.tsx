import React, { ReactNode, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Modal from "react-modal"
import SubmitModal from "./SubmitModal"

interface Props {
  children: ReactNode
  hideSubmitButton?: boolean
  hideSearchBar?: boolean
  headerText?: string
  subheaderText?: string
  customSubheader?: () => JSX.Element
}

export const Layout: React.FC<Props> = ({
  children,
  hideSubmitButton,
  hideSearchBar,
  headerText,
  subheaderText,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <div>
      <header>
        <Header
          onSubmitPress={() => setModalOpen(true)}
          hideSearchBar={hideSearchBar}
          hideSubmitButton={hideSubmitButton}
          headerText={headerText}
          subheaderText={subheaderText}
        />
      </header>
      <main className="px-12 py-6">{children}</main>
      <footer>
        <Footer />
      </footer>
      <SubmitModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
