import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from "reactstrap";

const name = 'lkx'
export const siteTitle = 'lukas playground'

export default function Layout({ children, home }) {
  return (
    <div class="max-w-5xl mx-auto h-auto px-4 sm:px-6 lg:px-8">
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
      <div class="flex-col align-middle">
        {home ? (
          <>
          <Container>
              <Row>  
            <img
              src="/images/profile.jpg"
              class="w-24 h-24 mt-8 mb-4"
              alt={name}
            />
            </Row>
          </Container>
          </>
        ) : (
          <>
          <Container>
              <Row>
            <Link href="/">
                <img
                  src="/images/profile.jpg"
                  class="w-24 h-24 mt-8 mb-4"
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
        <div class="my-4">
          <Link href="/">
            <a class="border-b border-black dark:border-white dark:text-white hover:bg-gray-100">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
