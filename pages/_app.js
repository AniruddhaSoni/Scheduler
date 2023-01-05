import "../styles/tailwind_config.css";
import "../styles/globals.css";
import "../styles/custom.css";
import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider
      session={session}
      refetchOnWindowFocus={false}
      refetchInterval={10 * 60}
    >
      <main className="custom-font min-h-screen w-full bg-slate-50 text-slate-900">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
