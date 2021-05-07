import { Link } from "gatsby"
import React, { useState } from "react"
import { Layout } from "~/components/Layout"
import { submitForm } from "~/helpers/submit"

const SubmitPage = () => {
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<boolean>(false)

  const [form, setForm] = useState<{
    name: string
    description: string
    url: string
    tags: string
  }>({
    name: "",
    description: "",
    url: "",
    tags: "",
  })

  const [errors, setErrors] = useState<{
    nameError: boolean
    urlError: boolean
    descriptionError: boolean
  }>({
    nameError: false,
    urlError: false,
    descriptionError: false,
  })

  const setName = (value: string) => {
    setForm({ ...form, name: value })
    setErrors({ ...errors, nameError: false })
  }

  const setDescription = (value: string) => {
    setForm({ ...form, description: value })
    setErrors({ ...errors, descriptionError: false })
  }

  const setUrl = (value: string) => {
    setForm({ ...form, url: value })
    setErrors({ ...errors, urlError: false })
  }

  const setTags = (value: string) => setForm({ ...form, tags: value })

  const validateForm = () => {
    let formValid = true
    if (!form.name) {
      setErrors({
        ...errors,
        nameError: true,
      })
      formValid = false
    }
    if (!form.url) {
      setErrors({
        ...errors,
        urlError: true,
      })
      formValid = false
    }
    if (!form.description) {
      setErrors({
        ...errors,
        descriptionError: true,
      })
      formValid = false
    }
    return formValid
  }

  const handleSubmit = () => {
    setSubmitError(false)
    const formValid = validateForm()
    if (!formValid) {
      return
    }
    // console.log(`
    // Tool Submission Mock:
    // ---------------------
    // Tool Name: ${form.name}
    // Tool URL: ${form.url}

    // Tool Description: ${form.description}

    // Tool Tags: ${form.tags.split(",")}
    // `)
    submitForm({
      toolName: form.name,
      toolUrl: form.url,
      toolDesc: form.description,
      toolTags: form.tags,
    })
      .then(() => {
        setHasSubmitted(true)
      })
      .catch(err => {
        console.error(err)
        setSubmitError(true)
      })
  }

  const handleClear = () => {
    setForm({
      name: "",
      url: "",
      description: "",
      tags: "",
    })
    setErrors({
      nameError: false,
      urlError: false,
      descriptionError: false,
    })
  }

  return (
    <>
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
        {hasSubmitted ? (
          <div className="bg-green-400 max-w-lg p-2 rounded-md shadow-md my-2">
            <p className="font-bold text-white">
              Sucessfully Submitted Devtool
            </p>
          </div>
        ) : (
          <>
            {submitError && (
              <div className="bg-red-400 max-w-lg p-2 rounded-md shadow-md my-2">
                <p className="font-bold text-white">
                  Error submitting devtool. Please try again later
                </p>
              </div>
            )}
            <div className="flex flex-col pb-6">
              <label className="text-sm font-bold">Tool Name</label>
              <input
                className="shadow border rounded text-lg p-2 max-w-lg"
                placeholder="Name of the tool"
                value={form.name}
                onChange={e => setName(e.target.value)}
              />
              {errors.nameError && (
                <div className="bg-red-400 max-w-lg p-2 rounded-md shadow-md my-2">
                  <p className="font-bold text-white">Please enter a name</p>
                </div>
              )}
            </div>
            <div className="flex flex-col py-6">
              <label>Tool URL</label>
              <input
                value={form.url}
                onChange={e => setUrl(e.target.value)}
                className="shadow border rounded text-lg p-2 max-w-lg"
                placeholder="URL of the Tool"
              />
              {errors.urlError && (
                <div className="bg-red-400 max-w-lg p-2 rounded-md shadow-md my-2">
                  <p className="font-bold text-white">Please enter a URL</p>
                </div>
              )}
            </div>
            <div className="flex flex-col py-6">
              <label className="text-sm font-bold">Tool Description</label>
              <p className="text-sm">
                A short description for the tool (max 160 characters)
              </p>
              <textarea
                rows={4}
                className="shadow border rounded text-lg p-2 max-w-lg"
                placeholder="Short description of the tool"
                value={form.description}
                onChange={e => setDescription(e.target.value)}
              />
              {errors.descriptionError && (
                <div className="bg-red-400 max-w-lg p-2 rounded-md shadow-md my-2">
                  <p className="font-bold text-white">
                    Please enter a description
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col py-6">
              <label className="text-sm font-bold">Tool Tags</label>
              <p className="text-sm">
                Enter any associated tags for the tool (comma separated)
              </p>
              <input
                className="shadow border rounded text-lg p-2 max-w-lg"
                placeholder="Productivity, Design, WebDev, etc"
                value={form.tags}
                onChange={e => setTags(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded shadow"
            >
              Submit
            </button>
            <button
              onClick={handleClear}
              className="ml-4 bg-red-500 text-white font-bold px-4 py-2 rounded shadow"
            >
              Clear
            </button>
          </>
        )}
      </Layout>
      {/* For netlify to pick up the fields */}
      <form name="Tool Submission From" data-netlify="true" className="hidden">
        <input className="hidden" name="form-tool-name" />
        <input className="hidden" name="form-tool-desc" />
        <input className="hidden" name="form-tool-url" />
        <input className="hidden" name="form-tool-tags" />
      </form>
    </>
  )
}

export default SubmitPage
