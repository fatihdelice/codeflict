import React from 'react'
import { Blogs } from '@/components/Blogs';
import { Navigation } from '@/components/nav';
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
    title: 'Blog',
    description: 'Discover a wide range of quality content on Codeflict\'s blog, from the latest tech trends and lifestyle tips to business innovations and personal development advice. Visit our blog to read, learn, and get inspired!',
    url: `${WEBSITE_HOST_URL}/blog`,
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
  

export default function Blog() {
    return (
        <div className='bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
            <Navigation />
            <Blogs />
        </div>
    )
}
