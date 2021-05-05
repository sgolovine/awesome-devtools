import React, { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: ReactNode
  hideSubmitButton?: boolean
  headerText?: string
  subheaderText?: string
  customSubheader?: () => JSX.Element
}

export const Layout: React.FC<Props> = ({
  children,
  hideSubmitButton = false,
  headerText = "Awesome Devtools",
  subheaderText = "A collection of awesome devtools and developer resources from around the internet.",
  customSubheader,
}) => (
  <div>
    <header>
      <Header
        headerText={headerText}
        subheaderText={subheaderText}
        hideSubmitButton={hideSubmitButton}
        customSubheader={customSubheader}
      />
    </header>
    <main className="px-12 py-6">{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
)
