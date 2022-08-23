import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return (
      <div class="flex items-center justify-center">
      {/* <Layout> */}
        {/* <Container> */}
        <div class="max-w-prose mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">
                <img
                  src="/images/profile.jpg"
                  class="w-24 h-24 mt-8 mb-4"
                />
            </Link>
        <div class="selection:bg-teal-blue">
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article class="mt-8">
            <h2>{postData.title}</h2>
        <div class="text-gray-400 dark:text-gray-200">
          <Date dateString={postData.date} />
        </div>
        <hr class="mt-4 mb-4"></hr>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </div>
      {/* </Container> */}
      {/* </Layout> */}
        <div class="my-4">
          <Link href="/">
            <a class="border-b border-black dark:border-white dark:text-white hover:bg-gray-100">← Back to home</a>
          </Link>
        </div>
      </div>
      </div>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}



