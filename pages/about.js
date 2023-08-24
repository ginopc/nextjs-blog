
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h1>About Page</h1>
                <p>This is out About Page.</p>
            </section>
            <section>
                <p>You can navigate this site form Side Menu</p>
            </section>
        </Layout>
    )
}