import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ReactNode } from "react";
import { classNames } from "../../utils";
import { useUser } from "@auth0/nextjs-auth0";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon },
  { name: "Trending", href: "#", icon: FireIcon },
  { name: "Bookmarks", href: "#", icon: BookmarkAltIcon },
  { name: "Messages", href: "#", icon: InboxIcon },
  { name: "Profile", href: "#", icon: UserIcon },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <body className="flex h-screen overflow-hidden">
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
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-2 text-base font-medium text-gray-600 rounded-md group hover:bg-gray-50 hover:text-gray-900"
                      >
                        <item.icon
                          className="w-6 h-6 mr-4 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
                <a href="#" className="flex-shrink-0 block group">
                  <div className="flex items-center">
                    <div>
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
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        {user?.name}
                      </p>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        Account Settings
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-20">
          <div className="flex flex-col flex-1 min-h-0 overflow-y-auto bg-gray-700">
            <div className="flex-1">
              <div className="flex items-center justify-center py-4 bg-red-500">
                <Image
                  alt="Workflow"
                  className="w-auto h-8"
                  height={32}
                  src="/logo-square-white.png"
                  width={32}
                />
              </div>
              <nav
                aria-label="Sidebar"
                className="flex flex-col items-center py-6 space-y-3"
              >
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center p-4 text-indigo-200 rounded-lg hover:bg-red-500"
                  >
                    <item.icon className="w-6 h-6" aria-hidden="true" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 pb-5">
              <a href="#" className="flex-shrink-0 w-full">
                {user?.picture ? (
                  <Image
                    className="block w-10 h-10 mx-auto rounded-full"
                    src={user?.picture}
                    alt=""
                  />
                ) : (
                  <UserIcon
                    className="block w-10 h-10 p-2 mx-auto text-white bg-gray-800 rounded-full"
                    aria-hidden="true"
                  />
                )}
                <div className="sr-only">
                  <p>{user?.name}</p>
                  <p>Account settings</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Mobile top navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-red-500 sm:px-6 lg:px-8">
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
                className="inline-flex items-center justify-center w-12 h-12 -mr-3 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <main className="flex flex-1 overflow-hidden">{children}</main>
      </div>
    </body>
  );
}

export default Layout;
