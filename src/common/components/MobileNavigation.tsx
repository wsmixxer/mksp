import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, UserIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../../utils";
import { useUser } from "@auth0/nextjs-auth0";
import {
  navigation,
  NavigationLink,
  userNavigation,
} from "../constants/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileNavigation = () => {
  const router = useRouter();
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavigationLink = ({
    active,
    item,
  }: {
    active: boolean;
    item: NavigationLink;
  }) => (
    <Link href={item.href}>
      <a
        key={item.label}
        className={classNames(
          active ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-700",
          "flex items-center p-2 text-base font-medium text-gray-600 rounded-md group hover:bg-gray-50 hover:text-gray-900"
        )}
      >
        <item.icon
          className="w-6 h-6 mr-4 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        {item.label}
      </a>
    </Link>
  );

  return (
    <>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs bg-white focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 pt-4 -mr-12">
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="pt-5 pb-4">
                <div className="flex items-center flex-shrink-0 px-4">
                  <Image
                    className="w-auto h-8"
                    src="/logo-full-black.png"
                    alt="Workflow"
                    height={32}
                    width={32}
                  />
                </div>
                <nav aria-label="Sidebar" className="mt-5">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <NavigationLink
                        active={router.pathname === item.href}
                        item={item}
                        key={item.href}
                      />
                    ))}
                  </div>
                </nav>
              </div>

              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4 mx-auto max-w-8xl sm:px-6">
                  <div className="flex-shrink-0">
                    {user?.picture ? (
                      <Image
                        className="inline-block w-10 h-10 rounded-full"
                        src={user?.picture}
                        alt=""
                      />
                    ) : (
                      <UserIcon
                        className="inline-block w-10 h-10 p-2 text-white bg-gray-800 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 ml-3">
                    <div className="text-base font-medium text-gray-800 truncate">
                      {user?.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500 truncate">
                      {user?.email}
                    </div>
                  </div>
                </div>
                <div className="px-2 mx-auto mt-3 space-y-1 max-w-8xl sm:px-4">
                  {userNavigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className="lg:hidden">
        <div className="flex items-center justify-between w-auto px-4 py-2 bg-gray-600 sm:px-6 lg:px-8">
          <div>
            <Image
              alt="Mixxer Logo"
              className="w-auto h-8"
              height={32}
              src="/logo-square-white.png"
              width={32}
            />
          </div>
          <div>
            <button
              type="button"
              className="inline-flex items-center justify-center w-12 h-12 -mr-3 text-white bg-gray-700 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
