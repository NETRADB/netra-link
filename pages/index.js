import Header from "../components/Header";
import LinkList from "../components/LinkList"
import Footer from "../components/Footer";
import Head from 'next/head'
import { initGA, logPageView } from '../utils/analytics'
import { useEffect } from 'react';


export async function getStaticProps(context) {
  return {
    props: {
      export: true,
    },
  }
}

function IndexPage({ buildTimestamp }){
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* FontAwesome CDN style tag */}
      <Head>
        <title>Netra Comunity | Link</title>
        <meta
          name="description"
          content="Netra adalah komunitas dibawah naungan TJKT SMKN 1 Adiwerna yang berfokus di bidang Teknologi Informasi. Netra bertujuan untuk mewadahi dan mengembangkan skill siswa - siswi SMKN 1 Adiwerna dalam ranah Teknologi Informasi."
        />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
      </Head>

      {/* Profile Pic and Title Header*/}
      <Header />

      {/* List of Links generated from links.json */}
      <LinkList />

      {/* Social Links and Footer Disclaimer/Credits */}
      <Footer />
    </div>
  );
}

export default IndexPage;
