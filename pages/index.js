import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'


import { getSortedPostsData } from '../lib/posts'

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
      <section className={utilStyles.headingMd}>
        <p>I'm jibril and I've broken ice on a lot of lakes.<br/>I sipped knowledge from the worlds waters,<br/>Fountains failed to quench my thirst so I searched for oceans<br/>Rubies and gold made name through the books.<br/>I was lost in the message now I wanna drink it all<br/>See, the knowledge that I've found is too small to sate my heart<br/>My soul is on drive, horsepowers couldn't cope!</p>
		
		<p>I'm an animator, designer and web developer. I'm curious and interested in the interests of interesting things</p>
		
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
	  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
    </Layout>
  )
}
