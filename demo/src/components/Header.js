import * as React from "react"
import { Link } from 'gatsby';
import classNames from 'classnames';
import { Transition } from '@tailwindui/react';

import Logo from './Logo';
import { useState } from 'react';
import { DepartmentNav } from './header/DepartmentNav';

function Header({ shadow = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={classNames({ 'shadow-lg': shadow })}>
      <div className="relative bg-white z-10">
        <div className="container mx-auto relative pt-6 py-6 px-4 xl:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <Link to="/" className="flex items-center">
                  <Logo />
                  <p className="text-lg font-medium ml-4 logo">
                    Royal University
                    <br /> of GatherContent
                  </p>
                </Link>
                <div className="-mr-2 flex items-center lg:ml-4">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    id="main-menu"
                    aria-haspopup="true"
                    onClick={() => setMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>

                    <span className="ml-2 hover:text-gray-600 hidden lg:block">Courses</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden lg:block md:ml-10 md:pr-4 md:space-x-8">
              <a
                href="#"
                className="font-medium text-white bg-accent-1 px-3 py-2 rounded-md transition-opacity hover:opacity-90"
              >
                Student portal
              </a>
            </div>
          </nav>

          <Transition
            show={menuOpen}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute top-0 inset-x-0 p-2 lg:px-3 transition transform origin-top-right lg:w-96">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Logo />
                    <p className="text-lg font-medium ml-4 logo">
                      Royal University
                      <br /> of GatherContent
                    </p>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setMenuOpen(false)}
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close main menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                    <DepartmentNav />
                  </div>
                  <div role="none">
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <style jsx>{`
        .logo {
          line-height: 20px;
        }
      `}</style>
    </header>
  );
};

export { Header };
