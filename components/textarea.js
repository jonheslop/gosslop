import { Fragment } from 'react';

export default function TextArea({
  name,
  label,
  placeholder,
  classes = 'max-w-md',
  ...attributes
}) {
  return (
    <Fragment>
      <label className="block mt-4 mb-2 text-xl" htmlFor={name}>
        {label}
      </label>
      <textarea
        rows={2}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`py-2 px-4 text-xl focus:ring ring-hinterland/50 outline-none rounded text-stone-600 placeholder-stone-300 w-full  bg-white/90 ${classes}`}
        {...attributes}
      />
    </Fragment>
  );
}
