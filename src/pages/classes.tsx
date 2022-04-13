import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ReactElement } from "react";
import { Layout } from "../common/templates";

export default function Classes() {
  return (
    <>
      {/* Primary column */}
      <section
        aria-labelledby="primary-heading"
        className="flex flex-col flex-1 h-full min-w-0 overflow-y-auto lg:order-last"
      >
        Primary Column
      </section>
      {/* Secondary column (hidden on smaller screens) */}
      <aside className="hidden lg:block lg:flex-shrink-0 lg:order-last">
        <div className="relative flex flex-col h-full overflow-y-auto bg-gray-100 border-r border-gray-200 w-96">
          Secondary Column
        </div>
      </aside>
    </>
  );
}

Classes.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = withPageAuthRequired();
