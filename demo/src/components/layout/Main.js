import * as React from 'react';

function Main({ children }) {
  return (
    <div className="col-span-9">
      { children }
    </div>
    )
}

export { Main }