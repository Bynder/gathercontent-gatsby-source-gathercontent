import * as React from 'react';

function Aside({ children }) {
  return (
    <aside className="hidden lg:block col-span-3">
      {children}
    </aside>
  )
}

export { Aside }