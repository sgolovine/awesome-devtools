import React, { useEffect, useState } from "react"
import Modal from "react-modal"
import SubmitForm from "./SubmitForm"
import { submitForm } from "~/helpers/submitForm"
import { Form, SuccessError } from "~/model/form"
import CloseIcon from "../icons/CloseIcon"

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
    if (!form.toolTags) {
      setError("Tool tags missing")
      return
    }

    submitForm(form)
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

  return (
    <Modal
      isOpen={open}
      onRequestClose={handleCloseModal}
      contentLabel="Submit Form"
      className="max-w-lg border mx-auto mt-64 bg-white p-4 rounded shadow"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-90"
    >
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
          <a className="text-blue-600 hover:underline" href="">
            opening a pull request
          </a>
          .
        </p>
        <SubmitForm
          toolName={form.toolName}
          toolDescription={form.toolDescription}
          toolURL={form.toolUrl}
          toolTags={form.toolTags}
          onToolNameChange={(newVal: string) =>
            handleFieldChange("toolName", newVal)
          }
          onToolDescriptionChange={(newVal: string) =>
            handleFieldChange("toolDescription", newVal)
          }
          onToolURLChange={(newVal: string) =>
            handleFieldChange("toolUrl", newVal)
          }
          onToolTagsChange={(newVal: string) =>
            handleFieldChange("toolTags", newVal)
          }
          onClear={handleCloseModal}
          onSubmit={handleSubmit}
          success={successError.success}
          error={successError.error}
        />
      </div>
    </Modal>
  )
}

export default SubmitModal
