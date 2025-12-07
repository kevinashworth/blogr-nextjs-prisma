import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Session } from 'next-auth';

type AppPropsWithSession = AppProps & {
  pageProps: {
    session: Session | null;
  };
};

const App = ({ Component, pageProps }: AppPropsWithSession) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;