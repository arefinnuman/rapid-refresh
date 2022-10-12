import React from "react";

const Blog = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <article className="max-w-2xl px-6 py-24 space-y-12 bg-primary dark:text-gray-50 m-5 rounded-lg">
        <div className="w-full mx-auto space-y-4 text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            What is the purpose of react router?
          </h1>
        </div>
        <div className="pt-12 border-t dark:border-gray-700">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="flex flex-col">
              <p className="dark:text-gray-400">
                ReactJS Router is mainly used for developing Single Page Web
                Applications. React Router is used to define multiple routes in
                the application. When a user types a specific URL into the
                browser, and if this URL path matches any 'route' inside the
                router file, the user will be redirected to that particular
                route.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="max-w-2xl px-6 py-24 m-5 space-y-12 bg-primary dark:text-gray-50 rounded-lg">
        <div className="w-full mx-auto space-y-4 text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            How does context api works ?
          </h1>
        </div>
        <div className="pt-12 border-t dark:border-gray-700">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="flex flex-col">
              <p className="dark:text-gray-400">
                The React Context API is a way for a React app to effectively
                produce global variables that can be passed around. This is the
                alternative to "prop drilling" or moving props from grandparent
                to child to parent, and so on. Context is also touted as an
                easier, lighter approach to state management using Redux.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="max-w-2xl px-6 py-24 m-5 space-y-12 bg-primary dark:text-gray-50 rounded-lg">
        <div className="w-full mx-auto space-y-4 text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            What is href in react. Explain your View.
          </h1>
        </div>
        <div className="pt-12 border-t dark:border-gray-700">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="flex flex-col">
              <p className="dark:text-gray-400">
                This href attribute contains the URL or path to the destination
                page. It may be a relative URL or an absolute URL. In React,
                relative URLs should always be handled by the link tag provided
                by the React Router, and pure anchor tags should only be used
                for absolute paths
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
