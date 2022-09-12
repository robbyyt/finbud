import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "utils/styles";
import { NavLinkProps } from "./helpers/types";

const DesktopNavLinks: FC<NavLinkProps> = ({ navLinks }) => {
  const { pathname } = useLocation();

  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {navLinks.map(({ href, name }) => {
          const isCurrent = href === pathname;
          return (
            <Link
              to={href}
              key={href}
              className={classNames(
                isCurrent
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
              aria-current={isCurrent ? "page" : undefined}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopNavLinks;
