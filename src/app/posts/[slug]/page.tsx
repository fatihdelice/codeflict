import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { MDXComponents } from 'mdx/types'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/nav'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    return
  }

  const { title, description, date, url, postImageUrl } = post;
  const meta = {
    image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `${WEBSITE_HOST_URL}/posts/${url}`,
      images: [
        {
          url: postImageUrl ? postImageUrl : meta.image,
        },
      ],
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${WEBSITE_HOST_URL}/posts/${url}`,
    },
  }
}

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <Image className="rounded-lg" {...props} />,
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className='mx-auto max-w-2xl px-6 lg:max-w-6xl pt-24 lg:pt-32 pb-8'>
      <Navigation />
      <h1 className='text-2xl sm:text-4xl '>{post.title}</h1>
      {
        post.authorUrl && post.authorName && post.authorProfileImageUrl && (
          <Link href={`${post.authorUrl}`} target='_blank'>
            <div className="overflow-visible relative max-w-sm mt-6 mb-4 flex items-center gap-4">
              <img className="w-14 h-14 rounded-full shadow-lg" src={post.authorProfileImageUrl} alt={post.authorName}/>
              <div className="flex flex-col py-5">
                <strong className="text-slate-900 text-md font-medium dark:text-slate-200">{post.authorName}</strong>
                <time className="text-sm text-zinc-400" dateTime={post.date}>
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                  </time>              
              </div>
            </div>
            <hr/>
          </Link>
        )
      }


      <article className="prose dark:prose-invert">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  )
}

export default PostLayout
