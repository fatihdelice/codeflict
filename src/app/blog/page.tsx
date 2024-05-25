import React from 'react'
import { Blogs } from '@/components/Blogs';
import { Navigation } from '@/components/nav'

export default function Blog() {
    return (
        <div className='bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
            <Navigation />
            <Blogs />
        </div>
    )
}
