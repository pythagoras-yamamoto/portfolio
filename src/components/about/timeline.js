export const TimeLine = () => {
  return (
    <>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2023
          </time>
          <h3 class="text-sm p-2 font-semibold text-gray-900 dark:text-white">
            北陸先端科学技術大学院大学(JAIST)
            <br />
            先端科学技術研究科 卒業
          </h3>
          <p class="mb-4 text-xs font-normal text-gray-500 dark:text-gray-400">
            情報科学専攻。機械学習、特に自然言語処理に関する研究に従事。
          </p>
          <a
            href="https://www.jaist.ac.jp/index.html"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more
            <svg
              class="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>{' '}
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2023
          </time>
          <h3 class="text-sm p-2 font-semibold text-gray-900 dark:text-white">
            サイボウズ株式会社 入社
          </h3>
          <p class="mb-4 text-xs font-normal text-gray-500 dark:text-gray-400">
            Webエンジニアとして業務アプリ開発ツール「kintone」の開発に従事。レガシーコードからReactへの刷新プロジェクトに参画。
          </p>
          <a
            href="https://kintone.cybozu.co.jp/"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more{' '}
            <svg
              class="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ol>
    </>
  );
};
