import React, { useEffect, useState } from "react"
import { Layout } from "~/components/Layout"
import SubmitForm from "~/components/SubmitForm"

interface Form {
  toolName: string
  toolUrl: string
  toolDescription: string
  toolTags: string
}

interface SuccessError {
  success: {
    show: boolean
    message: string
  }
  error: {
    show: boolean
    message: string
  }
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

const SubmitPage: React.FC = () => {
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
    setSuccess("Successfully submitted tool!")
    return
  }

  return (
    <Layout hideSearchBar hideSubmitButton headerText="Submit a Devtool">
      <div className="max-w-lg">
        <p>
          Submit a devtool to be featured on our list. There are a number of
          ways you can submit a devtool to us.
        </p>
        <div className="py-5">
          <h2 className="text-2xl font-bold leading-loose">
            Open a Pull Request
          </h2>
          <p>
            If you know how to create pull requests on Github, you can simply
            create a pull request for this site with the added tool.
          </p>
          <p>
            The repository for Awesome Devtools can be found{" "}
            <a
              className="text-blue-600 font-bold hover:underline"
              href="https://github.com/sgolovine/awesome-devtools"
            >
              here
            </a>
            . You can find instructions for opening a pull request{" "}
            <a className="text-blue-600 font-bold hover:underline" href="#">
              here
            </a>
          </p>
        </div>
        <div className="py-5">
          <h2 className="text-2xl font-bold leading-loose">Submit Request</h2>
          <p>
            Alternatively you can submit a request using the form below. I
            update the site from the form about once per week or when I get
            time. PR's to add tools will be approved much quicker.
          </p>
          <SubmitForm
            toolName={form.toolName}
            toolDescription={form.toolDescription}
            toolURL={form.toolUrl}
            toolTags={form.toolTags}
            onToolNameChange={(newVal: string) =>
              setForm({ ...form, toolName: newVal })
            }
            onToolDescriptionChange={(newVal: string) =>
              setForm({ ...form, toolDescription: newVal })
            }
            onToolURLChange={(newVal: string) =>
              setForm({ ...form, toolUrl: newVal })
            }
            onToolTagsChange={(newVal: string) =>
              setForm({ ...form, toolTags: newVal })
            }
            onClear={() => setForm(defaultForm)}
            onSubmit={handleSubmit}
            success={successError.success}
            error={successError.error}
          />
        </div>
      </div>
    </Layout>
  )
}

export default SubmitPage
