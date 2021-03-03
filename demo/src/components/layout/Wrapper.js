import * as React from 'react';

function Wrapper({ children }) {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-12 gap-16 py-8 px-4 xl:px-20 2xl:px-40">
      {children}
    </div>
  )
}

export { Wrapper }