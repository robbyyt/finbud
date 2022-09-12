import { Disclosure } from "@headlessui/react";
import MobileMenuButton from "./MobileMenuButton";
import AppLogoContainer from "./AppLogoContainer";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileNavLinks from "./MobileNavLinks";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import navLinks from "./helpers/navLinks";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <MobileMenuButton open={open} />
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <AppLogoContainer />
                <DesktopNavLinks navLinks={navLinks} />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ProfileDropdownMenu />
              </div>
            </div>
          </div>
          <MobileNavLinks navLinks={navLinks} />
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
