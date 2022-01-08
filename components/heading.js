export default function Heading({id, children}) {
  return (
    <h2
      className="text-4xl text-stone-400 font-extrabold font-sans tracking-tight"
      id={id}
    >
      {children}
    </h2>
  );
}
