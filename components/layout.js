import Head from 'next/head';
import { Children } from 'react/cjs/react.production.min';

export default function Layout({title, children}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 relative font-serif text-hinterland/90">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <svg
        id="texture"
        className="fixed inset-0 z-0 w-full h-screen opacity-20"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".8"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>

      <main className="grid grid-cols-1 lg:grid-cols-5 gap-4 xl:gap-16 items-start w-full flex-1 px-2 sm:px-12 xl:px-24 py-4 sm:py-16 z-10 text-stone/70 lg:mt-44">
        {children}
      </main>
    </div>
  );
}
