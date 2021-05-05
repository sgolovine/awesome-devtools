import { Link } from "gatsby"
import { string } from "prop-types"
import React, { useState } from "react"
import { Layout } from "~/components/Layout"
import { Tool } from "~/model/tool"

const SubmitPage = () => {
  const [form, setForm] = useState<Tool>({
    name: "",
    description: "",
    url: "",
    tags: [],
  })
  return (
    <Layout
      hideSubmitButton
      headerText="Submit a Devtool"
      customSubheader={() => (
        <>
          <p className="text-lg py-2">
            Submit a DevTool to be featured in the list.
          </p>
          <Link className="text-blue-500 text-lg hover:underline" to="/">
            Go Back
          </Link>
        </>
      )}
    >
      <div className="flex flex-col pb-6">
        <label className="text-sm font-bold">Tool Name</label>
        <input
          className="shadow border rounded text-lg p-2 max-w-lg"
          placeholder="Enter the name of the tool"
        />
      </div>
      <div className="flex flex-col py-6">
        <label>Tool URL</label>
        <input
          className="shadow border rounded text-lg p-2 max-w-lg"
          placeholder="Enter the name of the tool"
        />
      </div>
      <div className="flex flex-col py-6">
        <label className="text-sm font-bold">Tool Description</label>
        <p className="text-sm">
          Enter a short description for the tool (max 160 characters)
        </p>
        <textarea
          rows={4}
          className="shadow border rounded text-lg p-2 max-w-lg"
          placeholder="Enter a short description of the tool"
        />
      </div>
      <div className="flex flex-col py-6">
        <label className="text-sm font-bold">Tool Tags</label>
        <p className="text-sm">
          Enter any associated tags for the tool (comma separated)
        </p>
        <input
          className="shadow border rounded text-lg p-2 max-w-lg"
          placeholder="Enter the name of the tool"
        />
      </div>
      <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded shadow">
        Submit
      </button>
      <button className="ml-4 bg-red-500 text-white font-bold px-4 py-2 rounded shadow">
        Clear
      </button>
    </Layout>
  )
}

export default SubmitPage
