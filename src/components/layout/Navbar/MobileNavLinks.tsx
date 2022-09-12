import { FC, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { NavLinkProps } from "./helpers/types";
import { classNames } from "utils/styles";

const MobileNavLinks: FC<NavLinkProps> = ({ navLinks }) => {
  const { pathname } = useLocation();

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navLinks.map(({ href, name }) => {
          const isCurrent = href === pathname;
          return (
            <Disclosure.Button key={name} as={Fragment}>
              <Link
                to={href}
                className={classNames(
                  isCurrent
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={isCurrent ? "page" : undefined}
              >
                {name}
              </Link>
            </Disclosure.Button>
          );
        })}
      </div>
    </Disclosure.Panel>
  );
};

export default MobileNavLinks;
