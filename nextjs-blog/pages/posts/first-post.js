import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

export default FirstPost;
