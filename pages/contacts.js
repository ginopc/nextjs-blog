
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

export default function Contacts() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h1>Contact Page</h1>
                <p>Use follows to contact us.</p>
            </section>
        </Layout>
    )
}