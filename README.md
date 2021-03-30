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

## Query notes

Once you've configured the source plugin and started your Gatsby build, the following node types will be available;

- `gathercontentItems`
- `gathercontentFolders`
- `gathercontentTemplates`
- `gathercontentStatuses`

It's recommended that you utilise the query builder tool to improve your knowledge of the overall data structure. All Gatsby sites come with this tool, so once you've installed the source plugin, build your project locally and explore your projects data and schema. 

### Query a collection of items

You can utilise `allGathercontentItems` to gather a collection of items.

```javascript
export const query = graphql`
  {
    allGathercontentItems {
      nodes {
        id
        slug
        name
        itemId
        itemContent {
          foo {
            bar
          }
        }
      }
    }
  }
`
```

`gathercontentItems` are related to `gathercontentFolders`, `gathercontentTemplates` and `gathercontentStatuses`, which is useful for filtering.

```javascript
// filter items by a folder slug of "about"
export const query = graphql`
  {
    allGathercontentItems(filter: {folder: {slug: {eq: "about"}}}) {
      edges {
          node {
            id
            slug
            name
            itemId
            itemContent {
              foo {
                bar
              }
            }
          }
      }
    }
  }
`
```

### Query for a single node

You may want to query a single item (rather than filtering a collection). To do that you can utilise `gathercontentItems`.

```javascript
// query item with slug of "homepage"
export const query = graphql`
  {
    gathercontentItems(slug: {eq: "about"}) {
      id
      slug
      name
      itemId
      itemContent {
        foo {
          bar
        }
      }
    }
  }
`
```
