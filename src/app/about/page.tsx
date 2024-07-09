import { Navigation } from '@/components/nav'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'

const meta = {
  title: 'About us',
  description: 'Learn more about our mission, values, and the dedicated team behind Codeflict. We are committed to delivering exceptional products and services while fostering innovation and excellence. Discover our story and what sets us apart.',
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
            <h1 className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
              Hello and welcome to Codeflict!
            </h1>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
              At Codeflict, we are dedicated to shaping a world through reimagination and innovation. We are a comprehensive platform for all things related to software development, web development, and mobile application development. We provide in-depth reviews of the latest technologies and offer practical tips to enhance your coding skills.
              <br /> <br />
              Our mission is to guide you through the ever-evolving landscape of the software world. Whether you&apos;re a beginner looking to learn the basics or an experienced developer seeking to stay updated with the latest trends, Codeflict is here to support your journey. We are committed to sharing the latest developments in the industry and helping you advance your skills to new heights.
              <br /> <br />
              Join us at Codeflict to learn, grow, and build a better future together. We look forward to having you as part of our community!
            </p>
          </div>
          <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-transparent">
            <div className="w-full">
              <h2 className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl">
                Find me on
              </h2> </div> <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
              <Link href="https://www.linkedin.com/company/codeflict" target='_blank' className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-[#1A1A1A] ring-1 bg-zinc-50 dark:bg-transparent dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-[#C1FF14] group-hover text-primary:dark:text-white/50" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" d="M4.5 9.5H4c-.943 0-1.414 0-1.707.293S2 10.557 2 11.5V20c0 .943 0 1.414.293 1.707S3.057 22 4 22h.5c.943 0 1.414 0 1.707-.293S6.5 20.943 6.5 20v-8.5c0-.943 0-1.414-.293-1.707S5.443 9.5 4.5 9.5m2-5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m5.826 5.25H11.5c-.943 0-1.414 0-1.707.293S9.5 10.557 9.5 11.5V20c0 .943 0 1.414.293 1.707S10.557 22 11.5 22h.5c.943 0 1.414 0 1.707-.293S14 20.943 14 20v-3.5c0-1.657.528-3 2.088-3c.78 0 1.412.672 1.412 1.5v4.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h.499c.942 0 1.414 0 1.707-.293c.292-.293.293-.764.293-1.706L22 14c0-2.486-2.364-4.5-4.703-4.5c-1.332 0-2.52.652-3.297 1.673c0-.63 0-.945-.137-1.179a1 1 0 0 0-.358-.358c-.234-.137-.549-.137-1.179-.137" /></svg>
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
              <h3 className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Subscribe
                <span className="lg:block">to Our Newsletter</span>
              </h3>
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
