import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import CopyClipboard from "../components/copytoclipboard"
import Tooltip from "../components/tooltip"
import { Container, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
{/* const [darkTheme, setDarkTheme] = useState(undefined);

	const handleToggle = (event) => {
		setDarkTheme(event.target.checked);
	};

	useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue(
			"--initial-color-mode",
		);
		console.log("init", initialColorValue);

		setDarkTheme(initialColorValue === "dark");
	}, []);
	useEffect(() => {
		if (darkTheme !== undefined) {
			if (darkTheme) {
				document.documentElement.setAttribute("data-theme", "dark");
				window.localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.removeAttribute("data-theme");
				window.localStorage.setItem("theme", "light");
			}
		}
	}, [darkTheme]);

*/}

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
  <div class="selection:bg-teal-blue">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-24 max-w-6xl md:m-12 m-4">

      <div class="md:col-span-2">
          <h1 class="mt-4">Hey, I'm Lukas.</h1>
            <p class="mt-4">I'm currently building and designing things at {' '}
              <a href="https://hive-logistics.com" target="_blank" class="border-b border-black hover:bg-gray-100 p1">Hive ↗</a>, enabling D2C brands to run their business on autopilot.
            </p>
            <p class="mt-4">Before that, I was at {' '}
              <a href="https://n26.com" target="_blank" class="border-b border-black hover:bg-gray-100 p1">N26</a> — building the bank the world loves to use.</p>
            <br></br>
          <h1 class="mt-4">Tl;dr →</h1>
            <p class="mt-4">
              I believe in simplicity, and in getting the  {' '}
              <a href="https://www.folklore.org/StoryView.py?project=Macintosh&story=Rosings_Rascals.txt" target="_blank" class="border-b-1 hover:bg-gray-100 p1">details</a> right. 
            </p>
            <p class="mt-4">Love taking {' '}
              <a href="https://instagram.com/theluke.k" target="_blank" class="border-b border-black hover:bg-gray-100 p1">photos</a>, doing sports in and outside the gym (preferably: in the Alps), and writing for the joy of it. Forever trying to catch up on my reading list.</p>
            <p class="mt-4 mb-0"> Also, tinkering and making things. :) </p>
      </div>

      <div class="md:col h-auto">
          <h1 class="mt-4">Words →</h1>
            <div class="mt-4">
              <ul>
                {allPostsData.map(({ id, date, title }) => (
                  <li key={id}>
                    <Link href={`/posts/${id}`}>
                      <a class="border-b border-black hover:bg-gray-100 p1">{title}</a>
                    </Link>
                    <p class="text-gray-400 pr-6 pb-6 mt-0 text-sm">
                      <Date dateString={date} />
                    </p>
                  </li>
               ))}
              </ul>
          </div>
      </div>
            <div class="mt-4 max-w-6xl"><a href="https://twitter.com/lukasklinser" target="_blank" class="border-b border-black hover:bg-gray-100 p1 mr-4">twitter ↗</a> 
            <Tooltip content="Tap to copy" direction="top"><CopyClipboard class="mr-4"></CopyClipboard></Tooltip>
            </div>

    </div>
  </div>
      </Container> 
    </Layout>
  )
}