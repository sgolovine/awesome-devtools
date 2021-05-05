import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export const Layout: React.FC = ({ children }) => (
  <div>
    <header>
      <Header />
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
)
