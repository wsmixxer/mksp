import { ReactElement } from "react";
import { Layout } from "../common/templates";

export default function Page() {
  return (
    <>
      {/* Primary column */}
      <section
        aria-labelledby="primary-heading"
        className="flex flex-col flex-1 h-full min-w-0 overflow-y-auto lg:order-last"
      >
        <h1 id="primary-heading" className="sr-only">
          Home
        </h1>
        {/* Your content */}
      </section>
      {/* Secondary column (hidden on smaller screens) */}
      <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
        <div className="relative flex flex-col h-full overflow-y-auto bg-gray-100 border-r border-gray-200 w-96">
          {/* Your content */}
        </div>
      </aside>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
