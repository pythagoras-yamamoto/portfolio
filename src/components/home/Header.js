import Link from 'next/link';

export const Header = () => {
  return (
    <div class="flex justify-center z-50 fixed top-0 w-full py-4">
      <div class="flex justify-between w-2/3">
        <h1 class="font-bold text-2xl">Yudai Yamamoto</h1>
        <div class="flex items-center gap-4">
          <div class="relative">
            <label class="sr-only" for="search">
              Search
            </label>

            <input
              class="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="キーワード検索"
            />

            <button
              class="absolute p-2 text-gray-600 rounded-full transition -translate-y-1/2 hover:text-gray-700 bg-gray-50 top-1/2 right-1"
              type="button"
              aria-label="Submit Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <span
            aria-hidden="true"
            class="block w-px h-6 bg-gray-200 rounded-full"
          ></span>
          <a href="#" class="block shrink-0">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="object-cover w-10 h-10 rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};