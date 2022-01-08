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
        className="fixed inset-0 z-0 w-full h-screen opacity-30"
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

      <main className="grid grid-cols-2 gap-16 items-start w-full flex-1 px-24 py-16 z-10 text-stone/70">
        {children}
      </main>
    </div>
  );
}
