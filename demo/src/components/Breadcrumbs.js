import * as React from "react"
import { Link } from 'gatsby'

const arrow = (
  <svg
    className="fill-current w-3 h-3 mx-3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
  </svg>
);

function Breadcrumbs({ items }) {
  return (
    <nav
      className="text-gray-500 font-medium container px-4 xl:px-20 2xl:px-40 mx-auto"
      aria-label="Breadcrumb"
    >
      <div className="relative py-4 border-b">
        <ol className="list-none p-0 inline-flex items-center">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="transition-colors hover:text-accent-1"
              activeClassName="text-gray-800"
            >
              Home
            </Link>

            {items?.length && arrow}
          </li>

          {items?.map((item, i) => (
            <li
              key={item.id}
              className="flex items-center"
            >
              <Link
                to={item.to}
                className="transition-colors hover:text-accent-1"
                activeClassName="text-gray-800"
              >
                {item.name}
              </Link>

              {i !== items.length - 1 && arrow}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export { Breadcrumbs };
