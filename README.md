# gatsby-source-gathercontent

Source plugin for pulling content into Gatsby from GatherContent. 

## Install

```
npm install gastby-source-gathercontent 
```

## Configuration

We recommend using environment variables for your GatherContent configuration. You can learn more about using environment variables with Gatsby [here](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/).

```
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-gathercontent',
      options: {
        email: process.env.GATSBY_GC_EMAIL,
        apiKey: process.env.GATSBY_GC_API_KEY, // https://docs.gathercontent.com/reference#authentication 🔑
        projectId: process.env.GATSBY_GC_PROJECT_ID,
      }
    }
  ]
}
```

## Content sourcing 