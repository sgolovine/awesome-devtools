import faunadb, { query } from "faunadb"

interface FormArgs {
  toolName: string
  toolUrl: string
  toolDesc: string
  toolTags: string
}

export function submitForm(form: FormArgs) {
  const faunaClient = new faunadb.Client({
    secret: process.env.GATSBY_FAUNA_DB_API_KEY as string,
  })

  return faunaClient.query(
    query.Create(
      query.Collection(process.env.GATSBY_FAUNA_DB_COLLECTION_NAME as string),
      {
        data: {
          name: form.toolName,
          desc: form.toolDesc,
          url: form.toolUrl,
          tags: form.toolTags,
          createdOn: new Date().toString(),
        },
      }
    )
  )
}
