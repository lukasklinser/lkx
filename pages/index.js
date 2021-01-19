import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import CopyClipboard from "../components/copytoclipboard"

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from "reactstrap";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
      <Row>
        <Col sm="8">
      <section className={utilStyles.headingXl}>
        <p>Hey, I'm Lukas.</p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>I'm currently building and designing things at {' '}
          <a href="https://hive-logistics.com">Hive ↗</a>, enabling better access to D2C operations.
        </p>
        <p>Before that, I was at {' '}
        <a href="https://n26.com">N26 ↗</a> — building the bank the world loves to use.</p>
        <br></br>
      </section>
      <section className={utilStyles.headingLg}>
        <p>Tl;dr →</p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
        I believe in simplicity, and in getting the  {' '}
          <a href="https://www.folklore.org/StoryView.py?project=Macintosh&story=Rosings_Rascals.txt">details ↗</a> right.
        </p>
        <p>On weekends I take {' '}
        <a href="https://instagram.com/theluke.k">photos ↗</a>, like doing sports in and outside the gym, and tinker with technologies and designs.</p>
        <br></br>
      </section>
      </Col>
      <Col sm="1"></Col>
      <Col sm="3">
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Words →</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      </Col>
      </Row>
      <Row>
      <Col>  
      <hr></hr> 
      {/* <section className={utilStyles.headingMLg}>  
      <p>Let's build together →</p>
          </section> */}
      <section className={utilStyles.headingMd}>
        <Row>
          <Col sm="auto">
            <a href="https://twitter.com/lukasklinser">twitter ↗</a> 
          </Col>
          <Col sm="auto">
            <CopyClipboard></CopyClipboard>
          </Col>
        </Row>
      </section>
      </Col>
      </Row>
      </Container> 
    </Layout>
  )
}