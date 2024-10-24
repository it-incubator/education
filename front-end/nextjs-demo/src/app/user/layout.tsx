import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <section>
        <Link href={'/signin'}>SignIN</Link>
        <Link href={'/signup'}>SignUP</Link>
          <h1>POKEMON LAYOUT</h1>
      </section>
        {children}
      </>
  );
}
