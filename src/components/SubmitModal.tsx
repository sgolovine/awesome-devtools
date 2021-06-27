import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { useContext } from "react"
import Modal from "react-modal"
import { SearchContext } from "~/context/SearchContext"
import { submitForm } from "~/helpers/submitForm"
import { Form, SuccessError } from "~/model/form"
import CloseIcon from "./icons/CloseIcon"

interface Props {
  open: boolean
  onClose: () => void
}

const defaultForm: Form = {
  toolName: "",
  toolDescription: "",
  toolTags: "",
  toolUrl: "",
}

const defaultSuccessError: SuccessError = {
  success: {
    show: false,
    message: "",
  },
  error: {
    show: false,
    message: "",
  },
}

const SubmitModal: React.FC<Props> = ({ open, onClose }) => {
  const [form, setForm] = useState<Form>(defaultForm)
  const [successError, setSuccessError] = useState<SuccessError>(
    defaultSuccessError
  )

  const { tags } = useContext(SearchContext)

  const [selectedTags, setSelectedTags] = useState<string[]>([])

  useEffect(() => {
    console.log(selectedTags)
  }, [selectedTags])

  useEffect(() => {
    clearSuccess()
    clearError()
  }, [form])

  const setSuccess = (message: string) => {
    setSuccessError({
      success: {
        show: true,
        message,
      },
      error: {
        show: false,
        message: "",
      },
    })
  }

  const setError = (message: string) => {
    setSuccessError({
      success: {
        show: false,
        message: "",
      },
      error: {
        show: true,
        message,
      },
    })
  }

  const clearSuccess = () => {
    setSuccessError({
      ...successError,
      success: {
        show: false,
        message: "",
      },
    })
  }

  const clearError = () => {
    setSuccessError({
      ...successError,
      error: {
        show: false,
        message: "",
      },
    })
  }

  const handleSubmit = () => {
    if (!form.toolName) {
      setError("Tool name missing")
      return
    }
    if (!form.toolUrl) {
      setError("Tool URL missing")
      return
    }
    if (!form.toolDescription) {
      setError("Tool Description Missing")
      return
    }
    if (selectedTags.length === 0 && !form.toolTags) {
      setError("Tool tags missing")
      return
    }

    const customTags =
      !!form.toolTags && typeof form.toolTags === "string"
        ? form.toolTags.split(",").filter(tag => tag !== "")
        : []

    const allTags = [...selectedTags, ...customTags]

    const formToSubmit = {
      ...form,
      toolTags: allTags,
    }

    submitForm(formToSubmit)
      .then(resp => {
        console.log("success response", resp)
        setSuccess("Successfully submitted tool!")
        setForm(defaultForm)
        return
      })
      .catch(err => {
        console.error(err)
        setError("Unable to submit tool")
        return
      })
    return
  }

  const handleCloseModal = () => {
    setForm(defaultForm)
    onClose()
  }

  const handleFieldChange = (field: keyof typeof form, value: string) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(item => item !== tag))
    } else if (selectedTags.length < 4) {
      setSelectedTags([...selectedTags, tag])
    } else {
      // No Op - there are 4 tags in the slots
    }
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={handleCloseModal}
      contentLabel="Submit Form"
      className="max-w-lg border mx-auto lg:mt-64 bg-white p-4 rounded shadow"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-90"
    >
      {/* Header */}
      <div>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Submit a Devtool</h1>
          <button onClick={handleCloseModal}>
            <CloseIcon />
          </button>
        </div>
        <p className="text-lg my-3">
          Submit a devtool to be featured on our list. You can submit a tool by
          filling out the form below or by{" "}
          <a
            className="text-blue-600 hover:underline"
            href="https://github.com/sgolovine/awesome-devtools/"
          >
            opening a pull request
          </a>
          .
        </p>

        {/* Form */}
        <>
          {successError.success.show && (
            <div className="border shadow bg-green-600 p-4 rounded mt-5">
              <p className="text-white font-bold">
                {successError.success.message}
              </p>
            </div>
          )}
          {successError.error.show && (
            <div className="border shadow bg-red-600 p-4 rounded mt-5">
              <p className="text-white font-bold">
                {successError.error.message}
              </p>
            </div>
          )}
          <div className="flex flex-col py-3">
            <label className="text-sm font-bold">Tool Name</label>
            <input
              className="border rounded shadow p-2"
              type="text"
              value={form.toolName}
              onChange={e => {
                handleFieldChange("toolName", e.target.value)
              }}
            />
          </div>
          <div className="flex flex-col py-3">
            <label className="text-sm font-bold">Tool URL</label>
            <input
              className="border rounded shadow p-2"
              type="text"
              value={form.toolUrl}
              onChange={e => {
                handleFieldChange("toolUrl", e.target.value)
              }}
            />
          </div>
          <div className="flex flex-col py-3">
            <label className="text-sm font-bold pb-1">
              Tool Description ({form.toolDescription.length} / 160)
            </label>
            <textarea
              maxLength={160}
              className="border rounded shadow p-2"
              rows={4}
              value={form.toolDescription}
              onChange={e => {
                handleFieldChange("toolDescription", e.target.value)
              }}
            />
          </div>
          <div className="flex flex-col py-3">
            <label className="text-sm font-bold">
              Tool Tags ({selectedTags.length} / 4)
            </label>
            <div className="flex flex-row flex-wrap py-2">
              {tags.map((tag, index) => {
                return (
                  <button
                    // "m-1 p-2 border rounded shadow"
                    className={classNames(
                      "m-1",
                      "p-2",
                      "border",
                      "rounded",
                      "shadow",
                      {
                        "bg-theme-white": !selectedTags.includes(tag.name),
                        "bg-theme-yellow": selectedTags.includes(tag.name),
                      }
                    )}
                    key={index}
                    onClick={() => toggleTag(tag.name)}
                  >
                    <p className="text-xs font-bold">{tag.name}</p>
                  </button>
                )
              })}
            </div>
            <label className="text-sm font-bold">
              Optional Custom Tags (Subject to Review)
            </label>
            <input
              className="border rounded shadow p-2"
              type="text"
              value={form.toolTags}
              onChange={e => {
                handleFieldChange("toolTags", e.target.value)
              }}
            />
          </div>
          <div className="flex flex-row">
            <button
              className="px-4 py-2 rounded shadow bg-blue-500 mr-1 text-white font-bold"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="px-4 py-2 rounded shadow bg-red-500 ml-1 text-white font-bold"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </>
      </div>
    </Modal>
  )
}

export default SubmitModal
