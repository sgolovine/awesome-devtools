export interface Form {
  toolName: string
  toolUrl: string
  toolDescription: string
  toolTags: string | string[]
}

export interface SuccessError {
  success: {
    show: boolean
    message: string
  }
  error: {
    show: boolean
    message: string
  }
}
