import React, { Fragment, useState } from 'react';

import Layout from '../components/layout';
import Input from '../components/input';
import TextArea from '../components/textarea';
import Radio from '../components/radio';

export default function Home() {
  const [attending, setAttending] = useState(false);
  const [pending, setPending] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      attending: e.target.elements.attending.value,
    };

    if (e.target.elements.attending.value === 'yes') {
      payload.count = e.target.elements.count.value;
      payload.dietary = e.target.elements.dietary.value;
    }

    setPending(true)
    const response = await fetch('/api/submit', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.status === 201) {
      setComplete(true);
      setPending(false);
    } else {
      setComplete(false);
      setPending(false);
    }
  }

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
      {!complete && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input name="name" label="Name" placeholder="The Smiths" />
          <Input
            name="email"
            label="Email address"
            type="email"
            placeholder="name@email.com"
          />

          <fieldset className="mt-4">
            <legend className="text-xl">Are you attending?</legend>
            <Radio
              label="Yes"
              name="attending"
              value="yes"
              onChange={() => setAttending(true)}
            />
            <Radio
              label="No"
              name="attending"
              value="no"
              onChange={() => setAttending(false)}
            />
          </fieldset>

          {attending && (
            <Fragment>
              <Input
                name="count"
                classes="w-32"
                label="Number of people"
                placeholder="2"
                inputMode="numeric"
                pattern="[0-9]*"
              />
              <TextArea
                name="dietary"
                label="Dietary requirements"
                placeholder="Vegan"
              />
            </Fragment>
          )}
          <button className="block py-2 px-12 text-xl focus:ring ring-hinterland/50 outline-none rounded text-white/80 placeholder-stone-300 bg-stone-400 mt-8 hover:bg-hinterland transition-colors">
            {pending && (
              <span className="block w-8 h-8 border-4 rounded-full border-white border-r-transparent animate-spin flex-shrink-0">
                <span className="sr-only">Loading</span>
              </span>
            )}
            {!pending && 'Submit'}
          </button>
        </form>
      )}
      {complete && (
        <div>
          {attending && (
            <p className="text-xl leading-normal">
              <span className="text-4xl block mb-2">🎉</span> Thank you! We’re
              so excited to have you.
            </p>
          )}
          {!attending && (
            <p className="text-xl leading-normal">
              Thanks, we’re sorry you can’t make it.
            </p>
          )}
        </div>
      )}
    </Layout>
  );
}
