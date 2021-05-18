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

  const [activeTags, setActiveTags] = useState<string[]>([])

  // const toggleTag = (tag: string) => {
  //   if (activeTags.filter(currentTag => currentTag === tag).length > 0) {
  //     setActiveTags(activeTags.filter(item => item !== tag))
  //   } else {
  //     setActiveTags([...activeTags, tag])
  //   }
  // }

  // const { tools } = query.staticJson

  // const allUniqueTags = [
  //   ...new Set(
  //     tools.reduce((acc: string[], item: Tool) => {
  //       return [...acc, ...item.tags]
  //     }, [])
  //   ),
  // ] as string[]

  // const filteredCards =
  //   activeTags.length > 0
  //     ? (tools as Tool[]).filter(
  //         card => card.tags.filter(tag => activeTags.includes(tag)).length > 0
  //       )
  //     : tools

  const {
    tools,
    tags,
    searchInput,
    activeTag,
    setSearch,
    setActiveTag,
    clearSearch,
    clearTag,
  } = useContext(SearchContext)

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
