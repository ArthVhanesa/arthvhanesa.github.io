import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { PageLayout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // useEffect(() => {
  // 	if ('serviceWorker' in navigator) {
  // 		navigator.serviceWorker.register('/service-worker.js');
  // 	}
  // }, []);

  const getLayout =
    Component.getLayout || ((page) => <PageLayout>{page}</PageLayout>);

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
      <Analytics />
    </SessionProvider>
  );
}

export default MyApp;
