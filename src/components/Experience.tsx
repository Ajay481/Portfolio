function Experience() {
  return (
    <div className="border-b bg-primary border-orange justify-between w-full h-full px-6 md:px-16">
      <h1 className="w-full text-center text-purple border-x border-orange font-extrabold text-3xl py-10">
        Experience
      </h1>
      <div className="border-x border-orange flex justify-around flex-wrap-reverse w-full h-full px-16 py-10">
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              <svg
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
            <div className="mb-6">
              <h3 className="text-2xl text-orange">Intern</h3>
              <p className="text-md text-orange">
                MultiCodeGenius OCT 2023 - FEB 2024
              </p>
            </div>
            <div>
              <p className="text-md">
                Played a key role in the development of an E- Commerce website
                using the MongoDB, Express.js, Next.js and Node.js as tech
                stack.
              </p>
              <p className="text-md">
                Implementation of an AB test in the Resume-Done website focusing
                on enhancing user engagement and conversion rates.
              </p>
              <p className="text-md">
                Contribute in the development of the Maeble App, an AI- based
                chat website with a primary focus on utilizing the Next.js
                framework for enhanced performance and scalability.
              </p>
              <p className="text-md">
                Utilized Styled Components for consistent styling and improved
                maintainability across the application.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experience;
