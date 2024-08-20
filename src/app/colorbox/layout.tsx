export default function ColorBoxLayout({
  children,
  left,
  right,
}: {
  children: any;
  left: any;
  right: any;
}) {
  const isSidebar = true;
  return (
    <section>
      {children}
      {/* {left} */}
      {/* {right} */}
      {isSidebar ? left : right}
    </section>
  );
}
