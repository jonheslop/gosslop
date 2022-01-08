import Link from "next/link";

export default function CustomLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="underline decoration-dotted decoration-2 underline-offset-2 hover:text-stone-600 transition-colors">
        {children}
      </a>
    </Link>
  );
}
