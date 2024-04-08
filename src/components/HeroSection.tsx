import React from 'react'

export function HeroSection() {
  return (
    <div className="relative ml-auto">
        <div className="lg:w-2/3 text-center mx-auto">
          <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Shaping a world with <span className="text-primary dark:text-white">reimagination.</span></h1>
          <p className="mt-8 text-gray-700 dark:text-gray-300">A blog packed with code snippets for software development enthusiasts. We provide in-depth reviews of the latest technologies and practical tips to enhance your coding skills.</p>
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <a
              href="#blog"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white dark:text-gray-700"
              >Start reading</span>
            </a>
            <a
              href="/products"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                className="relative text-base font-semibold text-primary dark:text-white"
              >Explore our products</span>
            </a>
          </div>
        </div>
        <div className="mt-12 flex justify-center overflow-x-auto gap-4">
          <div className="p-0 sm:p-2 grayscale transition duration-200 hover:grayscale-0">
            <img src="./references/html.svg" title='HTML' className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="32" height="" />
          </div>
          <div className="p-0 sm:p-2 grayscale transition duration-200 hover:grayscale-0">
            <img src="./references/css.svg" title='CSS' className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="32" height="" />
          </div>
          <div className="p-0 sm:p-2 flex grayscale transition duration-200 hover:grayscale-0">
            <img src="./references/javascript.svg" title='JavaScript' className="h-12 w-auto m-auto" loading="lazy" alt="client logo" width="32" height="" />
          </div>
          <div className="p-0 sm:p-2 grayscale transition duration-200 hover:grayscale-0">
            <img src="./references/react.svg" title='React.js' className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="32" height="" />
          </div>
          <div className="p-0 sm:p-2 grayscale transition duration-200 hover:grayscale-0">
            <img src="./references/angular.svg" title='Angular.js' className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="32" height="" />
          </div>
          <div className="p-0 sm:p-2 flex grayscale transition duration-200 hover:grayscale-0">
            <img src="./references/nextjs.svg" title='Next.js' className="h-12 w-auto m-auto" loading="lazy" alt="client logo" width="32" height="" />
          </div>
          <div className="p-0 sm:p-2 grayscale transition duration-200 hover:grayscale-0">
            <img src="./references/java.svg" title='Java' className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="32" height="" />
          </div>
          <div className="p-0 sm:p-2 grayscale transition duration-200 hover:grayscale-0">
            <img src="./references/csharp.svg" title='C#' className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="32" height="" />
          </div>
          <div className="p-0 sm:p-2 grayscale transition duration-200 hover:grayscale-0">
            <img src="./references/php.svg" title='PHP' className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="32" height="" />
          </div>
        </div>
      </div>
  )
}
