# `gatsby-source-gathercontent` demo

## Prerequisites

1. A [GatherContent](https://gathercontent.com/) account.

2. Create a GatherContent API Key by following these [instructions](https://docs.gathercontent.com/reference#authentication).

3. Every GatherContent account has a set of examples projects. This demo works with a specific example project named "Course records (headless CMS example)". You'll need the project id, and you can find it in the settings for that project.

If you don't have this our support [contact us](https://gathercontent.com), and we'll add it to your account

## Config

To build the site, create a `.env.development` file. You can see an example via `.env.example`.

```shell
# .env.development
GATSBY_GC_EMAIL=<email>
GATSBY_GC_API_KEY=<your_api_key>
GATSBY_GC_PROJECT_ID=<project_id>
```

## Build & view the demo

```shell
npm install
npm run develop
```

The demo should now be running at http://localhost:8000! 

You can start editing the code in `src` or update the content in your GatherContent project to see updates happen locally.

## Live edits

A known challenge of using Gatsby is seeing live content edits in a development environment. 

Commonly, developers manually rebuild their project by re-running `npm run develop` but you can also run `npm run refresh`! 

For most types of content edits you won't need to manually restart your development server saving you time 👍

## More reading

Gatsby is a great tool and if you want to learn more, here's some recommended reading;

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
