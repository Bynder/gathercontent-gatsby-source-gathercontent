import * as React from 'react';

function PageIntro({ pageHeading, intro }) {
  return (
    <>
      <h1 className="text-4xl lg:text-6xl mb-4 font-medium">
        {pageHeading}
      </h1>
      <div
        className="text-xl lg:text-2xl mb-6 text-base-1"
        dangerouslySetInnerHTML={{ __html: intro }}
      />
    </>
  )
}

export { PageIntro }