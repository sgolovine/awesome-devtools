import React from "react"
import { Helmet } from "react-helmet"

const siteName = "Awesome Devtools"
const siteUrl = "https://awesomedevtools.com"
const siteImage = "https://awesomedevtools.com/twitter-card.png"
const siteLocale = "en_US"
const siteDescription =
  "Awesome Devtools is an open collection of development tools for web developers"

export const Head: React.FC = () => {
  return (
    <Helmet>
      <title>Awesome Devtools</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content={siteDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={siteName} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:locale" content={siteLocale} />

      {/* Twitter */}
      <meta property="twitter:card" content="website" />
      <meta property="twitter:creator" content="@_glvn" />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:title" content={siteName} />
      <meta property="twitter:image" content={siteImage} />
      <meta property="twitter:image:alt" content={siteName} />
    </Helmet>
  )
}
