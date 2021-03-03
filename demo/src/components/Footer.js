import * as React from "react"
import { Link } from 'gatsby';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-neutral-1 border-t">
      <div className="container px-4 xl:px-20 2xl:px-40 mx-auto py-6">
        <div className="flex items-center">
          <Logo />
          <p className="text-lg font-medium ml-4">
            Royal University of GatherContent
          </p>
        </div>
      </div>
      <div className="bg-neutral-2 text-lg border-t">
        <div className="container px-4 xl:px-20 2xl:px-40  mx-auto py-10 lg:flex justify-between">
          <div>
            <ul>
              <li>
                <Link to="/" className="transition-colors hover:text-accent-1">
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors hover:text-accent-1">
                  Privacy & cookies
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors hover:text-accent-1">
                  Data protection
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors hover:text-accent-1">
                  Website accessibility
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors hover:text-accent-1">
                  Freedom of information publication scheme
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
