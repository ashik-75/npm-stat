import React from "react";
import { Link } from "react-router-dom";

type TopSectionProps = {
  title: string;
  links?: {
    title: string;
    href?: string;
  }[];
};
const DotSvg = () => (
  <svg
    viewBox="0 0 2 2"
    width="3"
    height="3"
    aria-hidden="true"
    className="fill-gray-900"
  >
    <circle cx="1" cy="1" r="1" />
  </svg>
);
const TopSection: React.FC<TopSectionProps> = ({ title, links }) => {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="space flex items-center gap-5">
        {links?.map((link) => (
          <>
            {link?.href ? (
              <>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  to={link?.href}
                >
                  {link.title}
                </Link>
                <DotSvg />
              </>
            ) : (
              <span className="opacity-50">{link.title}</span>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
