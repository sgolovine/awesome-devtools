<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:2rem;">
  <img width="500" src="logo.svg" alt="logo">
  <a href="https://awesomedevtools.com" style="font-size:2rem;font-weight:bold;">Awesome Devtools</a>
</div>

A collection of awesome devtools from around the internet

## Contributing to the list

All tools submitted to Awesome Devtools are contributed by our users. You can submit a tool two ways:

1. Submit a PR - The fastest way to get your tool submitted to Awesome Devtools. Simply submit a PR to this repository. You can read more about submitting a PR below.
2. Submit Tool - Alternatively you can submit a tool via the [submission form](https://awesomedevtools.com/submit). Tools submitted here will appear on the site in about a week.

## Development

This project is bootstrapped with [React](https://reactjs.org), [Gatsby](https://gatsbyjs.com) and [TailwindCSS](https://tailwindcss.com/). Running this site is very similar to running any other React web app

1. Make sure you have the latest Node LTS installed. We recommend using [nvm](https://github.com/nvm-sh/nvm) for managing your Node version.
2. Install dependencies using `npm install`
3. Run the development server using: `npm run start`

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
