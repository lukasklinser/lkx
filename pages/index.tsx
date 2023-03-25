import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import CopyClipboard from "../components/copytoclipboard"
import Tooltip from "../components/tooltip"
import { GetStaticProps, NextApiRequest, NextApiResponse } from 'next'
import LastUpdated from '../components/LastUpdated'
import getConfig from "next/config";

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="selection:bg-teal-blue">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-8 place-content-center">

          <div className="col md:col-span-2">
            <h1 className="mt-4">Hey, I'm Lukas</h1>
            <div className="mt-4">I'm currently building and designing things at {' '}
              <a href="https://angel.co/company/hivetechnologies" target="_blank" className="border-b border-black dark:border-gray-200 p1">hive.app</a> ↗, creating the operations cockpit for e-commerce brands.</div>
            <div className="mt-4">Before that, I was at {' '}
              N26 — building the bank the world loves to use.</div>
            <br></br>
            <h1 className="mt-4">Tl;dr →</h1>
            <div className="mt-4">
              I believe in simplicity, and in getting the  {' '}
              <a href="https://www.folklore.org/StoryView.py?project=Macintosh&story=Rosings_Rascals.txt" target="_blank" className="border-b-1 p1">details</a> right.
            </div>
            <div className="mt-4">Love taking {' '}
              <a href="https://www.instagram.com/lukask.jpg/" target="_blank" className="border-b border-black dark:border-gray-200 p1">photos</a>, doing sports in and outside the gym (preferably: in the Alps), and writing for the joy of it. Forever trying to catch up on my reading list.</div>
            <div className="mt-4 mb-0"> Also, tinkering and making things. :) </div>
          </div>

          <div className="h-auto md:col">
            <h1 className="mt-4">Words →</h1>
            <div className="mt-4">
              <ul className="list-none">
                {allPostsData.map(({ id, date, title }) => (
                  <li key={id}>
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                    <p className="pb-6 pr-6 mt-0 text-sm text-gray-400">
                      <Date dateString={date} />
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="mt-4 col md:col-span-3 gap-y-0"></hr>

          <div className="max-w-6xl"><a href="https://twitter.com/lukasklinser" target="_blank" className="mr-4 border-b border-black dark:border-gray-200 p1">twitter ↗</a>
            <Tooltip content="Tap to copy" direction="top"><CopyClipboard class="mr-4"></CopyClipboard></Tooltip>
            <div className="mb-4 text-xs text-gray-400 max-w-6"> <LastUpdated /> </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
