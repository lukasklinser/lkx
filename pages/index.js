import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import CopyClipboard from "../components/copytoclipboard"
import Tooltip from "../components/tooltip"

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
      <section className={utilStyles.headingLg}>
        <p>Hey, I'm Lukas.</p>
      </section>
      {/* <section className={utilStyles.headingMd}> */}
      <section>
        <p>I'm currently building and designing things at {' '}
          <a href="https://hive-logistics.com" target="_blank">Hive ↗</a>, enabling D2C brands to run their business on autopilot.
        </p>
        <p>Before that, I was at {' '}
        <a href="https://n26.com" target="_blank">N26</a> — building the bank the world loves to use.</p>
        <br></br>
      </section>
     <section className={utilStyles.headingLg}>
        <p>Tl;dr →</p>
      </section>
      {/* <section className={utilStyles.headingMd}> */}
      <section>
        <p>
        I believe in simplicity, and in getting the  {' '}
          <a href="https://www.folklore.org/StoryView.py?project=Macintosh&story=Rosings_Rascals.txt" target="_blank">details</a> right. 
        </p>
        <p>Love taking {' '}
        <a href="https://instagram.com/theluke.k" target="_blank">photos</a>, doing sports in and outside the gym (preferably: in the Alps), and writing for the joy of it. Forever trying to catch up on my reading list.</p>
        <p> Also, tinkering and making things. :) </p>
        <br></br>
      </section>
      </Col>
      <Col sm="1"></Col>
      <Col sm="3">
     {/* <section className={`${utilStyles.headingMd}`}> */}
        <section className={utilStyles.headingLg}><p>Words →</p></section>
          <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a style={{fontSize: "18px"}}>{title}</a>
              </Link>
            <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} style={{fontSize: "18px"}} />
              </small>
            </li>
          ))}
        </ul>
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
            <a href="https://twitter.com/lukasklinser" target="_blank" style={{fontSize: "18px"}}>twitter ↗</a> 
          </Col>
          <Col sm="auto">
            <Tooltip content="Tap to copy" direction="top" className="mdHidden"><CopyClipboard></CopyClipboard></Tooltip>
          </Col>
        </Row>
      </section>
      </Col>
      </Row>
      </Container> 
    </Layout>
  )
}