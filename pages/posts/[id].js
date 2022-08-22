import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
// import utilStyles from '../../styles/utils.module.css'
import { Container, Row, Col } from "reactstrap";

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return (
      <div class="flex items-center justify-center">
      <Layout>
        <Container style={{ maxWidth: "36rem" }}>
        <div class="selection:bg-teal-blue">
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article class="mt-8">
            <h2> {/*className={utilStyles.headingLg}*/}{postData.title}</h2>
        <div class="text-gray-400 dark:text-gray-200"> {/*className={utilStyles.lightText}*/}
          <Date dateString={postData.date} />
        </div>
        <hr class="mt-4 mb-4"></hr>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </div>
      </Container>
      </Layout>
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



