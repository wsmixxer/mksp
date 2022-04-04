import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { classNames } from "../../utils";
import {
  navigation,
  NavigationLink,
  userNavigation,
} from "../constants/navigation";
import Link from "next/link";

const LargeScreenNavigation = () => {
  const router = useRouter();
  const { user } = useUser();

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
          "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
        )}
      >
        <item.icon className="w-6 h-6" aria-hidden="true" />
        <span className="sr-only">{item.label}</span>
      </a>
    </Link>
  );

  const UserNavigationLink = ({
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
          "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
        )}
      >
        {user?.picture && item.href === "/profile" ? (
          <Image
            className="block w-10 h-10 mx-auto rounded-full"
            src={user?.picture}
            alt=""
          />
        ) : (
          <item.icon
            className="block w-10 h-10 p-2 mx-auto text-white bg-gray-800 rounded-full"
            aria-hidden="true"
          />
        )}
        <span className="sr-only">{item.label}</span>
      </a>
    </Link>
  );

  return (
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
                <NavigationLink
                  active={router.pathname === item.href}
                  item={item}
                  key={item.href}
                />
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center flex-shrink-0 pb-5">
            {userNavigation.map((item) => (
              <UserNavigationLink
                active={router.pathname === item.href}
                item={item}
                key={item.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeScreenNavigation;
