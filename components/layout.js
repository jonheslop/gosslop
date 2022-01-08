import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import cn from 'classnames';
import Link from '../components/link';
import useActiveSection from '../hooks/use-active-section';

const navLinks = [
  { label: 'RSVP', slug: 'RSVP' },
  { label: 'Accomodation', slug: 'Accomodation' },
  { label: 'Schedule', slug: 'Schedule' },
  { label: 'The invites', slug: 'Invites' },
];

export default function Layout({ title, children }) {
  const activeSection = useActiveSection(navLinks.map((i) => i.slug));
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 relative font-serif text-hinterland/90">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 lg:grid-cols-4 gap-4 xl:gap-16 items-start w-full flex-1 px-2 sm:px-12 z-10 text-stone/70">
        <nav className="bg-stone-100 lg:col-span-4 w-full sticky top-0 py-4 mb-16 z-50">
          <ul className="flex justify-between lg:grid lg:grid-cols-4 gap-4 xl:gap-16 text-center">
            {navLinks.map((item, i) => (
              <li
                key={i}
                className={cn({
                  'text-right': i === navLinks.length - 1,
                  'text-left': i === 0,
                })}
              >
                <a
                  className={`text-sm sm:text-base lg:text-xl ${
                    activeSection === item.slug
                      ? 'text-stone-600'
                      : 'text-hinterland'
                  } hover:underline decoration-dotted decoration-2 underline-offset-2 hover:text-stone-600 transition-colors`}
                  href={`#${item.slug}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </main>
    </div>
  );
}
