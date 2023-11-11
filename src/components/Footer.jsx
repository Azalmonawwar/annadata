
const Footer = () => {
  return (
    <footer className={`bg-gray-900 ` }>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">Subscribe our newsletter to get updates.</h1>

            <div className="mx-auto mt-6 flex flex-col space-y-3 md:flex-row md:space-y-0">
              <input
                id="email"
                type="text"
                className="rounded-md border px-4 py-2 focus:border-blue-400 focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 border-gray-600 bg-gray-900 text-gray-300 "
                placeholder="Email Address"
              />

              <button
                className="w-full transform rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80 md:mx-4 md:w-auto"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Quick Links</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <a href="/" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Home
              </a>
              <a href="/" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Who We Are
              </a>
              <a href="/" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Industries</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
            <a href="/" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Retail & E-Commerce
              </a>
              <a href="/" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Information Technology
              </a>
              <a href="/" className="transition-colors duration-300 text-gray-300 hover:underline hover:text-gray-400">
                Finance & Insurance
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-8" />

        <div className="flex items-center justify-between">
          <a href="#">
            <img className="h-7 w-auto" src="https://merakiui.com/images/full-logo.svg" alt="" />
          </a>

          <div className="-mx-2 flex">
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
            </a>

            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
