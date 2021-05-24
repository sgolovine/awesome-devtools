const Joi = require("joi")
const data = require("../static/data.json")

// Checks the data for any duplicates
function checkForDuplicates(data) {
  //   Get the URL's from the data
  const urls = data.map(item => item.url)
  //   Find duplicates in the urls
  const duplicateUrls = findDuplicates(urls)

  if (duplicateUrls.length === 0) {
    return { duplicatesFound: false, duplicates: [] }
  }

  const duplicateItems = duplicateUrls.map(url => {
    return data.filter(item => item.url === url)
  })

  if (duplicateItems.length > 0) {
    return { duplicatesFound: true, duplicates: duplicateItems }
  } else {
    return { duplicatesFound: false, duplicates: [] }
  }
}

const schema = Joi.object({
  tools: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      url: Joi.string().required(),
      tags: Joi.array().items(Joi.string()).min(1).required(),
    })
  ),
})

console.log("😎 Validating Schema")

const { error } = schema.validate(data)

if (error) {
  console.log("❌ Error Validating Schema\n")
  error.details.map(errorItem => {
    const toolIndex = errorItem.path[1]
    const tool = data.tools[toolIndex]

    console.log(`Error at index ${toolIndex}: \n`, tool)
    console.log("\n")
  })
  return 1
}

console.log("😎 Checking for Duplicates")

const { duplicatesFound, duplicates } = checkForDuplicates(data)

if (duplicatesFound) {
  console.log("❌  Duplicates Found in Data")
  console.log("Duplicates: \n", duplicates)
  return 1
}

console.log("✅ Validation Success")
return 0
