import { Navigation } from '@/components/nav'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'

const meta = {
  title: 'About us',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function About() {
  return (
    <div className='bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
      <Navigation />
      <section className="mx-auto max-w-2xl px-6 lg:max-w-6xl pt-24 lg:pt-32 pb-8">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2">
          <div className="lg:col-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-transparent shadow-xl dark:shadow-thick rounded-3xl p-8">
            <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
              Hello and welcome to Codeflict!
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
              We are a team dedicated to shaping a world with reimagination.
              Our blog is filled with code snippets for software development enthusiasts.
              We provide in-depth reviews of the latest technologies and practical tips to enhance your coding skills.
              <br /> <br />
              Codeflict is here to guide you through the ever-evolving and changing landscape of the software world.
              We&apos;re here to share the latest developments in the industry and help you advance your software skills even further.
              <br /> <br />
              If you&apos;re looking to learn something new about the world of software and expand your knowledge, you&apos;ve come to the right place.
              We&apos;re excited to work with you to build a better future together at Codeflict.
              <br /> <br />
              We look forward to having you among us!
            </p>
          </div>
          <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-transparent">
            <div className="w-full">
              <p className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl">
                Find me on
              </p> </div> <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
              <Link href="#_" className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-[#1A1A1A] ring-1 bg-zinc-50 dark:bg-transparent dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-[#C1FF14] group-hover text-primary:dark:text-white/50" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
              </Link>
              <Link href="https://github.com/codeflict" target='_blank' className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-[#1A1A1A] ring-1 bg-zinc-50 dark:bg-transparent dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-[#C1FF14] group-hover text-primary:dark:text-white/50" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
              </Link>
              <Link href="https://twitter.com/codeflict" target='_blank' className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-[#1A1A1A] ring-1 bg-zinc-50 dark:bg-transparent dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-[#C1FF14] group-hover text-primary:dark:text-white/50 icon-tabler-brand-x" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </Link>
              <Link href="https://www.instagram.com/codeflict/" target='_blank' className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-[#1A1A1A] ring-1 bg-zinc-50 dark:bg-transparent dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-[#C1FF14] group-hover text-primary:dark:text-white/50" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                </svg>
              </Link>
            </div>
          </div>
          <div className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-3 lg:row-start-2 bg-white dark:bg-transparent shadow-xl dark:shadow-thick">
            <div className="relative p-8 text-center w-full">
              <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Subscribe
                <span className="lg:block">to Our Newsletter</span>
              </p>
              <form className="mt-6 sm:flex w-full lg:max-w-sm mx-auto">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input type="email" name="email-address" id="email-address" autoComplete="email" required className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter your email" disabled />
                <div className="mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
                  <button type="submit" className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-[#C1FF14] dark:text-[#1A1A1A] dark:hover:opacity-60 hover:text-primary hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between" disabled>Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
