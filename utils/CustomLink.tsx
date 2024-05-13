import Link from "next/link";

export const CustomLink = ({
  href,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} passHref>
      <span className="px-3 py-4 text-lg font-normal">{children}</span>
    </Link>
  );
};
