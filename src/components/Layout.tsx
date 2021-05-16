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

export const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <header>
      <Header />
    </header>
    <main className="px-12 py-6">{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
)
