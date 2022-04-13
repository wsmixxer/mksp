import {
  UserIcon,
  AcademicCapIcon,
  CalendarIcon,
  UsersIcon,
  LogoutIcon,
  CollectionIcon,
  NewspaperIcon,
  ServerIcon,
  TerminalIcon,
} from "@heroicons/react/outline";

export type NavigationLink = {
  href: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  label: string;
};

export const navigation: NavigationLink[] = [
  {
    href: "/",
    label: "Dashboard",
    icon: CollectionIcon,
  },
  {
    href: "/members",
    icon: UsersIcon,
    label: "Members",
  },
  {
    href: "/classes",
    icon: AcademicCapIcon,
    label: "Classes",
  },
  {
    href: "/events",
    icon: CalendarIcon,
    label: "Events",
  },
  {
    href: "/marketing",
    icon: NewspaperIcon,
    label: "Marketing",
  },
  {
    href: "/shoptools",
    icon: ServerIcon,
    label: "Shop Tools",
  },
  {
    href: "/accesscontrol",
    icon: TerminalIcon,
    label: "Access Control",
  },
];

export const userNavigation: NavigationLink[] = [
  { label: "Your Profile", href: "/profile", icon: UserIcon },
  { label: "Sign out", href: "/api/auth/logout", icon: LogoutIcon },
];
