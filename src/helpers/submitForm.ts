import faunadb, { query } from "faunadb"
import { Form } from "~/model/form"

export async function submitForm({
  toolName,
  toolUrl,
  toolDescription,
  toolTags,
}: Form) {
  return new Promise(async (resolve, reject) => {
    if (
      process.env.GATSBY_FAUNA_DB_KEY &&
      process.env.GATSBY_FAUNA_DB_COLLECTION_NAME
    ) {
      const faunaClient = new faunadb.Client({
        secret: process.env.GATSBY_FAUNA_DB_KEY,
      })

      const res = await faunaClient.query(
        query.Create(
          query.Collection(process.env.GATSBY_FAUNA_DB_COLLECTION_NAME),
          {
            data: {
              toolName,
              toolDescription,
              toolUrl,
              toolTags,
            },
          }
        )
      )
      resolve(res)
    } else {
      reject("Unauthorized")
    }
  })
}
