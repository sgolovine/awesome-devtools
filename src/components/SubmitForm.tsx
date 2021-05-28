import React from "react"

interface Props {
  toolName: string
  toolDescription: string
  toolURL: string
  toolTags: string
  success: {
    show: boolean
    message: string
  }
  error: {
    show: boolean
    message: string
  }
  onToolNameChange: (newVal: string) => void
  onToolDescriptionChange: (newVal: string) => void
  onToolURLChange: (newVal: string) => void
  onToolTagsChange: (newVal: string) => void
  onClear: () => void
  onSubmit: () => void
}

const SubmitForm: React.FC<Props> = ({
  toolName,
  toolDescription,
  toolURL,
  toolTags,
  onToolNameChange,
  onToolDescriptionChange,
  onToolTagsChange,
  onToolURLChange,
  onSubmit,
  onClear,
  success,
  error,
}) => {
  return (
    <>
      {success.show && (
        <div className="border shadow bg-green-600 p-4 rounded mt-5">
          <p className="text-white font-bold">{success.message}</p>
        </div>
      )}
      {error.show && (
        <div className="border shadow bg-red-600 p-4 rounded mt-5">
          <p className="text-white font-bold">{error.message}</p>
        </div>
      )}
      <div className="flex flex-col py-3">
        <label className="text-sm font-bold">Tool Name</label>
        <input
          className="border rounded shadow p-2"
          type="text"
          value={toolName}
          onChange={e => onToolNameChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col py-3">
        <label className="text-sm font-bold">Tool URL</label>
        <input
          className="border rounded shadow p-2"
          type="text"
          value={toolURL}
          onChange={e => onToolURLChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col py-3">
        <label className="text-sm font-bold">Tool Description</label>
        <textarea
          className="border rounded shadow p-2"
          rows={4}
          value={toolDescription}
          onChange={e => onToolDescriptionChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col py-3">
        <label className="text-sm font-bold">Tool Tags (comma separated)</label>
        <input
          className="border rounded shadow p-2"
          type="text"
          value={toolTags}
          onChange={e => onToolTagsChange(e.target.value)}
        />
      </div>
      <div className="flex flex-row">
        <button
          className="px-4 py-2 rounded shadow bg-blue-400 mr-1 text-white font-bold"
          onClick={onSubmit}
        >
          Submit
        </button>
        <button
          className="px-4 py-2 rounded shadow bg-red-400 ml-1 text-white font-bold"
          onClick={onClear}
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default SubmitForm
