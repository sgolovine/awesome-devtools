import React, { useState } from "react"
import Footer from "./Footer"
import SubmitModal from "./SubmitModal"
import { AboveFold } from "./AboveFold"

interface Props {
  hideControls?: boolean
}

export const Layout: React.FC<Props> = ({ children, hideControls = false }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div className="max-w-7xl mx-auto">
      <AboveFold
        hideControls={hideControls}
        openModal={() => setModalOpen(true)}
      />

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
