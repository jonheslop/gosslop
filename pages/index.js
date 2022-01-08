import React, { Fragment, useState } from 'react';
import Image from "next/image";
import Layout from '../components/layout';
import RSVP from '../components/rsvp';
import Heading from '../components/heading';
import Link from '../components/link';
import useActiveSection from '../hooks/use-active-section';

const navLinks = [
  { label: 'RSVP', slug: 'RSVP' },
  { label: 'Accomodation', slug: 'Accomodation' },
  { label: 'Schedule', slug: 'Schedule' },
  { label: 'Making the invites', slug: 'Invites' },
];

export default function Home() {
  const activeSection = useActiveSection(navLinks.map((i) => i.slug));
  return (
    <Layout title="A wedding is occurring">
      <nav className="sticky top-4 lg:top-16 mt-14 mb-8 z-50">
        <ul className="flex lg:flex-col gap-2">
          {navLinks.map((item, i) => (
            <li key={i}>
              <a
                className={`text-xl ${
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
      <div className="col-span-2 lg:sticky top-8 mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight font-sans mb-4">
          Bec and Jon
        </h1>
        <p className="text-xl leading-normal">Friday 7 October 2022</p>
        <p className="text-xl leading-normal">
          <Link href="https://g.page/conwayhall">
            Conway Hall, Red Lion Square, London
          </Link>
        </p>
      </div>
      <div className="col-span-2">
        <RSVP />
        <div className="mt-24">
          <Heading id="Accomodation">Accomodation</Heading>
          <p className="mt-8 text-xl leading-normal max-w-lg">
            Conway Hall is centrally located in between Holborn and Bloomsbury.
            There are plenty of hotels in the area. But the nearest is a Premier
            Inn, within 3 minutes walk.
          </p>

          <ul className="list list-disc list-inside space-y-2 text-xl mt-8">
            <li>
              <Link href="https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-holborn.html">
                Premier Inn Holborn, ~3 mins walk
              </Link>
            </li>
            <li>
              <Link href="https://www.hilton.com/en/hotels/lhrlbdi-doubletree-london-west-end/">
                DoubleTree Hilton, ~5 mins walk
              </Link>
            </li>
            <li>
              <Link href="https://www.google.co.uk/maps/place/Premier+Inn+London+Holborn+hotel/@51.5174496,-0.1256104,16z/data=!4m14!1m2!2m1!1shotels+near+WC1R+4RL!3m10!1s0x48761b4a0f186a89:0x9201682bbf968fc1!5m3!1s2022-10-07!4m1!1i2!8m2!3d51.5201338!4d-0.1173205!15sChRob3RlbHMgbmVhciBXQzFSIDRSTJIBBWhvdGVs!16s%2Fg%2F1q62fnrr6">
                Loads more hotels in the area, ~15 mins walk
              </Link>
            </li>
            <li>
              <Link href="https://www.airbnb.co.uk/s/WC1R-4RL/homes?tab_id=home_tab&refinement_paths[]=%2Fhomes&flexible_trip_dates[]=february&flexible_trip_dates[]=january&flexible_trip_lengths[]=weekend_trip&date_picker_type=calendar&checkin=2022-10-07&checkout=2022-10-08&source=structured_search_input_header&search_type=filter_change">
                Nearby Airbnb rentals
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-24">
          <Heading id="Schedule">Schedule</Heading>
          <p className="mt-8 text-xl leading-normal max-w-lg">
            This is a work in progress. But the please arrive at 2pm for a
            2:30pm ceremony in the library. Afterwards we’ll move to the main
            hall for dinner, drinks and dancing. We have the venue until 2am.
          </p>
        </div>
        <div className="mt-24">
          <Heading id="Invites">How we made the invites</Heading>
          <p className="mt-8 text-xl leading-normal max-w-lg">
            We printed the invites in Bristol, on January 2 2022 at{' '}
            <Link href="https://www.departmentofsmallworks.co.uk/letterpress">
              The Letterpress Collective
            </Link>{' '}
            with our friends Nick and Harriet. We had a lot of fun doing it.
          </p>

          <div className="grid grid-cols-2 gap-4 lg:gap-2 my-8">
            <figure className="col-span-2">
              <Image
                width="1008"
                height="756"
                alt="Bec and Harriet planning the layout"
                src="/images/invite-printing-01.jpg"
              />
            </figure>
            <figure>
              <Image
                width="756"
                height="1008"
                alt="Nick cutting the paper"
                src="/images/invite-printing-02.jpg"
              />
            </figure>
            <figure>
              <Image
                width="756"
                height="1008"
                alt="Bec and Harriet setting the type"
                src="/images/invite-printing-04.jpg"
              />
            </figure>
            <figure>
              <Image
                width="756"
                height="1008"
                alt="Bec and Harriet tweaking the leading"
                src="/images/invite-printing-05.jpg"
              />
            </figure>
            <figure>
              <Image
                width="756"
                height="1008"
                alt="Jon mixing the colours"
                src="/images/invite-printing-06.jpg"
              />
            </figure>
            <figure className="col-span-2 flex justify-center">
              <Image
                width="255"
                height="455"
                alt="Jon and Bec embossing the card"
                src="/images/printing-3.gif"
              />
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  );
}
