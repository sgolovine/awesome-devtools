import React, { useState } from "react"
import { Layout } from "~/components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Card from "~/components/Card"
import { Tool } from "~/model/tool"

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

  const [activeTags, setActiveTags] = useState<string[]>([])

  const toggleTag = (tag: string) => {
    if (activeTags.filter(currentTag => currentTag === tag).length > 0) {
      setActiveTags(activeTags.filter(item => item !== tag))
    } else {
      setActiveTags([...activeTags, tag])
    }
  }

  const { tools } = query.staticJson

  const allUniqueTags = [
    ...new Set(
      tools.reduce((acc: string[], item: Tool) => {
        return [...acc, ...item.tags]
      }, [])
    ),
  ] as string[]

  const filteredCards =
    activeTags.length > 0
      ? (tools as Tool[]).filter(
          card => card.tags.filter(tag => activeTags.includes(tag)).length > 0
        )
      : tools

  return (
    <Layout>
      <>
        <div className="mb-6">
          {allUniqueTags.map((tag: string) => {
            const tagActive = !!(
              activeTags.filter(currentTag => currentTag === tag).length > 0
            )
            const color = tagActive ? "bg-green-500" : "bg-blue-500"
            return (
              <button
                onClick={() => toggleTag(tag)}
                className={`${color} font-bold text-white mx-1 my-1 px-2 py-1`}
                key={tag}
              >
                {tag}
              </button>
            )
          })}
        </div>
        <div className="flex flex-row flex-wrap max-w-7xl">
          {filteredCards.map((tool: Tool) => {
            return (
              <div className="m-1">
                <Card
                  key={tool.name}
                  title={tool.name}
                  description={tool.description}
                  url={tool.url}
                  tags={tool.tags}
                />
              </div>
            )
          })}
        </div>
      </>
    </Layout>
  )
}

export default IndexPage
