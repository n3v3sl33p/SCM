export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="rounded-3xl w-[500px] py-5 px-10">{children}</div>
    </div>
  );
}
