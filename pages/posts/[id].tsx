import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import { Container, Row, Col } from "reactstrap";
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ 
  postData 
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
    return (
      <div className="flex items-center justify-center">
      <Layout>
      <Container style={{ display: 'flex',  justifyContent:'left', alignItems:'center', maxWidth: "36rem" }}>
        <div className="mx-auto max-w-prose">
        <div className="selection:bg-teal-blue">
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article className="mt-4">
            <h2>{postData.title}</h2>
        <div className="text-gray-400 dark:text-gray-200">
          <Date dateString={postData.date} />
        </div>
        <hr className="mt-4 mb-4"></hr>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </div>
      </div>
      </Container>
       </Layout>
      </div>
    )
  }

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}



