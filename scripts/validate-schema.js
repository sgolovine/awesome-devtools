const Joi = require("joi")
const data = require("../static/data.json")

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

console.log("✅ Validation Success")
return 0
