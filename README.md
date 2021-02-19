# gatsby-source-gathercontent

Source plugin for pulling content into Gatsby from GatherContent. 

## Install

```
npm install gastby-source-gathercontent 
```

## How to use

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

The following nodes types are available from GatherContent;

- `gathercontentItems`
- `gathercontentFolders`
- `gathercontentTemplates`
- `gathercontentStatuses`

It's strongly recommended that you utilise the built-in query builder tool to improve your knowledge of the overall data structure. All Gatsby sites come with this tool, so once you've installed the source plugin, build your project locally and explore your projects data and schema. 

### Query a collection of items

You can utilise `allGathercontentItems` to gather a collection of items.

```javascript
export const query = graphql`
  {
    allGathercontentItems {
      nodes {
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

`gathercontentItems` are related to `gathercontentFolders`, `gathercontentTemplates` and `gathercontentStatuses`, which is helpful for filtering.

Here's an example of filtering by a specific folder.

```javascript
export const query = graphql`
  {
    allGathercontentItems(filter: {folder: {slug: {eq: "gill"}}})
      nodes {
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

The built-in GraphQL builder tool is really helpful for discovering the power of what you can filter by. Give it a try 🙂 

### Query for a single node

You may want to query a single item (rather than filtering a collection). To do that you can utilise `gathercontentItems`.

```javascript
export const query = graphql`
  {
    gathercontentItems(itemId: {eq: gill}) {
      itemId
      name
      itemContent {
        foo {
          bar
        }
      }
    }
  }
`
```

You can use any data you wish to query a single item. In the example above we use the `itemId` but you can use anything for example the `name` might be 
