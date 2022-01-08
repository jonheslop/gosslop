export default function Heading({id, children}) {
  return (
    <h2
      className="text-3xl sm:text-4xl text-hinterland font-extrabold font-sans tracking-tight"
      id={id}
    >
      {children}
    </h2>
  );
}
