import Head from 'next/head'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Container, Row, Col } from "reactstrap";

const name = 'lkx'
export const siteTitle = 'lukas playground'

export default function Layout({ children, home }) {
  return (
    // container
    <div class="max-w-72 p-4 mx-8 my-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="hey, i'm lukas."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div class="flex-col align-middle m-8">
      {/* // className={styles.header} */}
        {home ? (
          <>
          <Container>
              <Row>
            <img
              src="/images/profile.jpg"
              class="w-16 h-16 max-w-72"
              // className={`${styles.headerHomeImage}`}
              alt={name}
            />
            </Row>
          </Container>
           {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
          </>
        ) : (
          <>
          <Container style={{ maxWidth: "36rem" }}>
              <Row>
            <Link href="/">
                <img
                  src="/images/profile.jpg"
                  class="w-16 h-16 max-w-72"
                  // className={`${styles.headerHomeImage2}`}
                  alt={name}
                />
            </Link>
            </Row>
            </Container>
          </>
        )}
      </div>
      <main>{children}</main>
      {!home && (
        <div>
          {/* className={styles.backToHome}> */}
          <Link href="/">
            <a class="border-b border-black dark:border-white dark:text-white hover:bg-gray-100 mx-4">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
