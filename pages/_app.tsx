import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface ComponentWithLayout {
  getLayout?: (page: ReactNode) => ReactNode;
}

export default function App({ Component, pageProps }: AppProps) {
  if ((Component as ComponentWithLayout)?.getLayout) {
    return (
      <>
        <Head>
          <title>Dashbord | Ether Dash React Nextjs Template</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <RecoilRoot>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
          >
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Dashbord | Ether Dash React Nextjs Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <RecoilRoot>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}