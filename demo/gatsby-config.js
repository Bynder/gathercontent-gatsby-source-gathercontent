require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        `gatsby-plugin-postcss`,
        {
            resolve: "../src/gatsby-node",
            options: {
                email: process.env.GATSBY_GC_EMAIL,
                apiKey: process.env.GATSBY_GC_API_KEY,
                projectId: process.env.GATSBY_GC_PROJECT_ID,
            },
        },
    ]
}