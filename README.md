<div style="display:flex;flex-direction:column;align-items:center;margin-bottom:50px;text-align:center">
  <div style="width:300px">
    <img src="./logo.svg" />
  </div>
  <h2>Awesome Devtools</h2>
  <p>A collection of awesome devtools from around the internet</p>
</div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/278a13fc-df3d-4590-83fe-a7decd564592/deploy-status)](https://app.netlify.com/sites/awesome-devtools/deploys)

[![Data Validation CI](https://github.com/sgolovine/awesome-devtools/actions/workflows/validation.yaml/badge.svg)](https://github.com/sgolovine/awesome-devtools/actions/workflows/validation.yaml)

[![Test CI](https://github.com/sgolovine/awesome-devtools/actions/workflows/test.yaml/badge.svg)](https://github.com/sgolovine/awesome-devtools/actions/workflows/test.yaml)

## Contributing to the list

All tools submitted to Awesome Devtools are contributed by our users. You can submit a tool two ways:

1. Submit a PR - The fastest way to get your tool submitted to Awesome Devtools. Simply submit a PR to this repository. You can read more about submitting a PR below.
2. Submit Tool - Alternatively you can submit a tool via the [submission form](https://awesomedevtools.com/submit). Tools submitted here will appear on the site in about a week.

## Environment Variables

Awesome Devtools uses FaunaDB for form submissions. While not required to run the app, if you need to work on form submissions, make sure you have a defined `.env.development` file and the proper keys inside.

| Key Name                        | Key Description            |
| ------------------------------- | -------------------------- |
| GATSBY_FAUNA_DB_KEY             | Your Fauna API Key         |
| GATSBY_FAUNA_DB_COLLECTION_NAME | Your Fauna collection name |

## Development

This project is bootstrapped with [React](https://reactjs.org), [Gatsby](https://gatsbyjs.com) and [TailwindCSS](https://tailwindcss.com/). Running this site is very similar to running any other React web app

1. Make sure you have the latest Node LTS installed. We recommend using [nvm](https://github.com/nvm-sh/nvm) for managing your Node version.
2. Copy `.env.example` to `.env.development` and replace the keys with your own
3. Install dependencies using `npm install`
4. Run the development server using: `npm run start`

## Updating the List

The data for this site is under `static/data.json`. Each item on the list has the following shape:

```json
{
  "name": "Awesome Devtools",
  "description": "A collection of awesome devtools from around the internet",
  "url": "https://awesomedevtools.com",
  "tags": ["Awesome", "List", "Tools"]
}
```

After making modifications to the list. Run `npm run validate-data`. The data validation script checks for the following:

- Name must exist
- URL must exist
- Description must exist
- Must have at least one tag
