import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
const MAX_DISPLAY = 5
export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return {
    props: {
      posts,
    },
  }
}
export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

<div className="divide-y divide-gray-200 dark:divide-gray-700">
      <section>
          <div class=" mx-auto flex flex-col items-center px-5 py-8">
            <div class="prose mb-8 flex w-full max-w-max flex-col text-left lg:max-w-2xl">
              <div class="mx-auto w-full">
                <h1 className='dark:text-gray-100'>Thanks for visiting!</h1>
                <h2 className='dark:text-gray-100 italic'>A Place for...everything! </h2>
                <p className='dark:text-gray-100'>
                  That might be a little too ambitious... but that is what I am endeavouring to do! For the longest time I have wanted a place where I could share my projects, portfolio pieces, art, and everything else in-between. This site is where all of those things meet.
                </p>
                <p className='dark:text-gray-100'>
                  I am an iOS developer, web frontend engineer, filmmaker, drone pilot, and lover of creative pursuits.
                </p>
                <Link
                          href={`/about`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read More about Auston`}
                        >
                          Read more about me &rarr;
                        </Link>
              </div>
            </div>
          </div>
          {/* <div class=" w-full items-center px-5">
            <div class="prose mx-auto flex w-full max-w-max flex-wrap justify-center lg:max-w-3xl">
              <div class="relative justify-center lg:px-4">
                <div class="lg:grid lg:grid-cols-2">
                  <div class="p-8">
                    <h1 className='dark:text-gray-100'>Short length headline.</h1>
                    <p className='dark:text-gray-100'>
                      You're about to launch soon and must be 100% focused on your product. Don't
                      loose precious days designing, coding the landing page and testing .
                    </p>
                    <a
                      href="#"
                      class="mt-4 inline-flex items-center font-semibold text-blue-600 hover:text-neutral-600 lg:mb-0"
                      title="read more"
                    >
                      {' '}
                      Read More »{' '}
                    </a>
                  </div>
                  <div class="p-8">
                    <h1 className='dark:text-gray-100'>Short length headline.</h1>
                    <p className='dark:text-gray-100'>
                      You're about to launch soon and must be 100% focused on your product. Don't
                      loose precious days designing, coding the landing page and testing .
                    </p>
                    <a
                      href="#"
                      class="mt-4 inline-flex items-center font-semibold text-blue-600 hover:text-neutral-600 lg:mb-0"
                      title="read more"
                    >
                      {' '}
                      Read More »{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>

      {/* {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
