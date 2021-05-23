import React, { useContext, useState } from "react"
import { Layout } from "~/components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Card from "~/components/Card"
import { Tool } from "~/model/tool"
import { SearchContext } from "~/context/SearchContext"
import TagCloud from "~/components/TagCloud"

const IndexPage: React.FC = () => {
  const query = useStaticQuery(graphql`
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

  const subheader = `A collection of awesome devtools and developer resources from around the internet. Awesome devtools has ${query.staticJson.tools.length} tools in our database.`

  const { tools, tags, activeTag, setActiveTag, clearTag } = useContext(
    SearchContext
  )

  return (
    <Layout subheaderText={subheader}>
      <>
        {/* TAG CLOUD COMPONENT */}
        <TagCloud
          tags={tags}
          activeTag={activeTag}
          toggleTag={setActiveTag}
          clearTag={clearTag}
        />
        <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap max-w-7xl">
          {tools.map((tool: Tool) => {
            return (
              <Card
                key={tool.name}
                title={tool.name}
                description={tool.description}
                url={tool.url}
                tags={tool.tags}
              />
            )
          })}
        </div>
      </>
    </Layout>
  )
}

export default IndexPage
