import Link from 'next/link';

export const Nav = () => {
  return (
    <div class="fixed flex justify-center w-full bottom-0 z-50 py-6">
      <div class="flex justify-center space-x-4">
        <Link class="" href="/about">
          <a class="inline-block p-3 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring">
            <span class="sr-only"> Download </span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </Link>
        <Link href="/download">
          <a
            class="inline-block p-3 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            href="/download"
          >
            <span class="sr-only"> Download </span>

            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </Link>
        <Link href="/download">
          <a class="inline-block p-3 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
            <span class="sr-only"> Download </span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
