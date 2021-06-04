const faker = require("faker")
const fs = require("fs")
const { exit } = require("process")

const toolsToMake = 500

function getRandomCategory() {
  let dict = Array(50)

  for (let i = 0; i < dict.length; i++) {
    const randomWord = faker.lorem.word()
    dict[i] = randomWord
  }
  const randomIndex = Math.floor(Math.random() * (50 - 0) + 0)
  return dict[randomIndex]
}

function makeTool() {
  return {
    name: faker.company.companyName(),
    description: faker.lorem.sentence(),
    url: faker.internet.url(),
    tags: [getRandomCategory(), getRandomCategory(), getRandomCategory()],
  }
}

function makeTools(numberTools) {
  let tools = Array(toolsToMake)
  for (let i = 0; i < tools.length; i++) {
    tools[i] = makeTool()
  }
  return {
    tools,
  }
}

console.log(`Making ${toolsToMake} tools`)
// console.log(JSON.stringify(makeTools(toolsToMake), null, 2))

fs.writeFileSync(
  `${__dirname}/../static/test-data.json`,
  JSON.stringify(makeTools(toolsToMake), null, 2),
  function (err) {
    console.error("Error", err)
    exit(1)
  }
)

console.log("Created tools!")
