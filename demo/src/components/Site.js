import * as React from 'react';

const defaultMetadata = {
  title: 'GatherContent University',
  description: '',
  keywords: '',
}

function Site({ children, siteMetadata = defaultMetadata }) {
  return (
    <html>
      <head>
        <title>{siteMetadata?.title}</title>
        <meta name="description" content={siteMetadata?.description} />
        <meta name="keywords" content={siteMetadata?.keywords} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export { Site }