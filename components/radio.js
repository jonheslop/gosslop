import React from 'react';

export default function Radio({
  label = '',
  hint = '',
  id = '',
  name = '',
  value = '',
  containerClasses,
  ...attributes
}) {
  return (
    <div className={`my-4 flex items-center ${containerClasses}`}>
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        className="custom-radio appearance-none w-6 h-6 bg-origin-border shrink-0 hover:border-stone-400 focus:ring ring-hinterland/50 focus:border-hinterland outline-none rounded-full cursor-pointer text-stone-400 border-2 border-stone-400 checked:border-transparent hover:checked:border-transparent checked:bg-hinterland bg-transparent"
        {...attributes}
      />
      <label
        className="ml-3 mt-[3px] leading-none cursor-pointer sm:text-xl"
        htmlFor={id}
      >
        {label}
        <span className="opacity-70 ml-2">{hint}</span>
      </label>
    </div>
  );
}
