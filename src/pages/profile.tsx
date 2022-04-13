import { UserProfile, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ReactElement } from "react";
import { Layout } from "../common/templates";

type ProfileProps = { user: UserProfile };

export default function Profile({ user }: ProfileProps): React.ReactElement {
  return (
    <>
      <section
        aria-labelledby="primary-heading"
        className="flex flex-col flex-1 h-full min-w-0 overflow-y-auto lg:order-last"
      >
        <h1 id="primary-heading" className="sr-only">
          Profile
        </h1>
        <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
      </section>
    </>
  );
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = withPageAuthRequired();
