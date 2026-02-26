function Navbar() {
  return (
    <header className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img src="/logoelevva.png" className="w-13" alt="" />
            </a>
          </div>

          <div className="hidden md:block mx-auto">
            <nav aria-label="Global">
              <ul className="flex items-center gap-20 text-sm">
                <li>
                  <a
                    className=" dark:text-slate-50 dark:hover:text-white/75"
                    href="#"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className=" dark:text-slate-50 dark:hover:text-white/75"
                    href="#"
                  >
                    Sobre
                  </a>
                </li>

                <li>
                  <a
                    className=" dark:text-slate-50 dark:hover:text-white/75"
                    href="#"
                  >
                    Produto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
