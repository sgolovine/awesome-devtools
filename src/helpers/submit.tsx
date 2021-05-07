interface FormArgs {
  toolName: string
  toolUrl: string
  toolDesc: string
  toolTags: string
}

function _encodeBody(data: any) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export async function submitForm({
  toolName,
  toolDesc,
  toolUrl,
  toolTags,
}: FormArgs) {
  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: _encodeBody({
      "form-tool-name": toolName,
      "form-tool-desc": toolDesc,
      "form-tool-url": toolUrl,
      "form-tool-tags": toolTags,
    }),
  })
}
