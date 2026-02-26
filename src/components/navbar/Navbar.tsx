import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img src="/logoelevva.png" className="w-13" alt="" />
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block mx-auto">
            <nav aria-label="Global">
              <ul className="flex items-center gap-20 text-sm">
                <li>
                  <a
                    className="dark:text-slate-50 dark:hover:text-white/75"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="dark:text-slate-50 dark:hover:text-white/75"
                    href="#"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    className="dark:text-slate-50 dark:hover:text-white/75"
                    href="#"
                  >
                    Produto
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 dark:text-white focus:outline-none"
            >
              {isOpen ? (
                // Ícone X
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Ícone Hamburger
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 text-center absolute w-full left-0">
          <nav className="px-4 py-4">
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  className="block dark:text-slate-50 dark:hover:text-white/75"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="block dark:text-slate-50 dark:hover:text-white/75"
                  href="#"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  className="block dark:text-slate-50 dark:hover:text-white/75"
                  href="#"
                >
                  Produto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
