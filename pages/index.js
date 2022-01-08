import React, { Fragment, useState } from 'react';
import Layout from '../components/layout';
import RSVP from "../components/rsvp";
export default function Home() {
  return (
    <Layout title="A wedding is occurring">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight font-sans mb-4">
          a wedding is occurring
        </h1>
        <p className="text-xl leading-normal">
          Bec and Jon are getting married
        </p>
        <p className="text-xl leading-normal">Friday 7 October 2022</p>
        <p className="text-xl leading-normal">
          <a
            href="https://g.page/conwayhall"
            title="Google maps location for Conway Hall"
            className="underline decoration-dotted decoration-2 underline-offset-2 hover:text-stone-600 transition-colors"
          >
            Conway Hall, Red Lion Square, London
          </a>
        </p>
        <h2 className="text-xl mt-8">Please RSVP</h2>
      </div>
      <RSVP/>
    </Layout>
  );
}
