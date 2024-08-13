import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export function PostCard(post: Post) {
  return (
    <article className="flex flex-col items-start justify-between">
      {
        post.authorUrl && post.authorName && post.authorProfileImageUrl && (
          <Link href={`${post.authorUrl}`} target='_blank'>
            <div className="overflow-visible relative max-w-sm flex items-center gap-3">
              <img className="w-5 h-5 rounded-full shadow-lg" src={post.authorProfileImageUrl} alt={post.authorName} />
              <div className="flex flex-col py-3">
                <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">{post.authorName}</strong>
              </div>
            </div>
          </Link>
        )
      }
      <Link className="flex link gap-4 justify-between w-full" href={post.url}>
        <div className='group relative break-all'>
          <h2 className="text-lg font-bold leading-6">
            {post.title}
          </h2>
          <p className="line-clamp-3 text-sm leading-6 !mt-2">
            {post.description}
          </p>
          <p className='!mt-4'>
            <time className="text-sm text-zinc-400" dateTime={post.date}>
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </p>
        </div>
        {
          post.postImageUrl && (
            <div className='relative'>
              <img src={post.postImageUrl} width={160} height={112} alt={post.title} className='w-20 h-14 sm:w-40 max-w-none rounded-sm sm:max-h-28 sm:h-28 object-contain' />
            </div>
          )
        }

      </Link>
    </article>
  )
}
