// src/pages/_app.tsx
import React from 'react';
import '../styles/global.css'; //
import Head from 'next/head'; //
import ThemeSwitcher from '../components/ThemeSwitcher';

const App = ({ Component, pageProps }) => { //
  const inputRef = React.useRef<HTMLInputElement>(null); //

  const onClickAnywhere = () => { //
    inputRef.current.focus(); //
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
      </Head>

      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base relative" // Add 'relative' here
        onClick={onClickAnywhere}
      >
        <ThemeSwitcher />
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;