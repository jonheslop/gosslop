import React, { Fragment, useState } from 'react';
import Input from './input';
import TextArea from './textarea';
import Radio from './radio';
import Heading from './heading';

export default function RSVP() {
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

  if (!complete) return (
    <form onSubmit={(e) => handleSubmit(e)} className="lg:mt-96">
      <Heading id="RSVP">Please RSVP</Heading>
      <Input name="name" label="Name" placeholder="The Smiths" />
      <Input
        name="email"
        label="Email address"
        type="email"
        placeholder="name@email.com"
      />

      <fieldset className="mt-4">
        <legend className="sm:text-xl">Are you attending?</legend>
        <Radio
          id="yes"
          label="Yes"
          name="attending"
          value="yes"
          onChange={() => setAttending(true)}
        />
        <Radio
          id="no"
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
      <button className="block py-2 px-12 sm:text-xl focus:ring ring-hinterland/50 outline-none rounded text-white/80 placeholder-stone-300 bg-stone-400 mt-8 hover:bg-hinterland transition-colors">
        {pending && (
          <span className="block w-8 h-8 border-4 rounded-full border-white border-r-transparent animate-spin flex-shrink-0">
            <span className="sr-only">Loading</span>
          </span>
        )}
        {!pending && 'Submit'}
      </button>
    </form>
  );

  if (complete) return (
    <div id="RSVP">
      {attending && (
        <p className="sm:text-xl leading-normal">
          <span className="text-4xl block mb-2">🎉</span> Thank you! We’re so
          excited to have you.
        </p>
      )}
      {!attending && (
        <p className="sm:text-xl leading-normal">
          Thanks, we’re sorry you can’t make it.
        </p>
      )}
    </div>
  );
}
