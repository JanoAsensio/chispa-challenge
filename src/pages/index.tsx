import { NextPage } from "next";
import Head from "next/head";
import { footer, home, nav } from "../../data";
import Layout from "../components/Layout";
import { API_URL } from "../constants/config";

type IndexPageProps = {
  nav: typeof nav;
  home: typeof home;
  footer: typeof footer;
};

const IndexPage: NextPage<IndexPageProps> = ({ nav, home, footer }) => {
  return (
    <>
      <Head>
        <title>Chispa Challenge - Jano Asensio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navProps={nav} homeProps={home} footerProps={footer} />
    </>
  );
};

export async function getServerSideProps() {
  const resNav = await fetch(API_URL + "/api/nav");
  const nav = await resNav.json();

  const resHome = await fetch(API_URL + "/api/home");
  const home = await resHome.json();

  const resFooter = await fetch(API_URL + "/api/footer");
  const footer = await resFooter.json();

  return {
    props: {
      nav,
      home,
      footer,
    },
  };
}

export default IndexPage;
