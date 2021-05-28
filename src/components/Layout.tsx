import React, { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

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
}) => (
  <div>
    <header>
      <Header
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
  </div>
)
