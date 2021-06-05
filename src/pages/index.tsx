import React, { useContext } from "react"
import { Layout } from "~/components/layout/Layout"
import Card from "~/components/card/Card"
import { Tool } from "~/model/tool"
import { SearchContext } from "~/context/SearchContext"

const IndexPage: React.FC = () => {
  const { tools } = useContext(SearchContext)

  return (
    <Layout>
      <div className="justify-center flex flex-col sm:flex-row flex-nowrap sm:flex-wrap">
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
    </Layout>
  )
}

export default IndexPage
