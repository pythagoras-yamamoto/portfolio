import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { motion } from 'framer-motion';
import { ThreeAnimation } from '../libs/3D/ThreeAnimation';
import { fadeIn } from '../libs/motion/fadeIn';
import { fadeOut } from '../libs/motion/fadeOut';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = (props) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit={{ opacity: 0 }}
    className="flex justify-center w-screen"
  >
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="flex justify-center w-screen pt-6 fixed z-50"
    >
      <div class="flex justify-between w-4/5">
        <h1 class="font-bold text-xl">Yudai Yamamoto</h1>
        <div class="flex items-center gap-4">
          <div class="relative">
            <label class="sr-only" for="search">
              {' '}
              Search{' '}
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
    </motion.div>
    <div className="h-screen w-4/5 my-auto mb-8">
      <motion.div
        variants={stagger}
        className="flex justify-start items-center h-4/5 overflow-y-hidden scrollbar-hide"
      >
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="hoge flex flex-column justify-center items-start pr-20 w-32"
        >
          <h1 class="text-xl font-bold pb-3">Creating Desital Product.</h1>
          <p class="text-xs">
            ソフトウェアエンジニア、山本雄大のポートフォリオサイトです。
            主にデジタルプロダクトの企画、制作、開発を行っています。
          </p>
          <div class="flex flex-1">
            <Link href="/products/ghost-whey-vegan">
              <motion.div
                className="fuga"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThreeAnimation />
              </motion.div>
            </Link>
            <Link href="/products/ghost-whey-vegan">
              <motion.div
                className="fuga"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThreeAnimation />
              </motion.div>
            </Link>
            <Link href="/products/ghost-whey-vegan">
              <motion.div
                className="fuga"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThreeAnimation />
              </motion.div>
            </Link>
          </div>
        </motion.div>
        <div className="row flex flex-1 h-48 w-48">
          <a href="#" class="relative block bg-black group mr-3">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
            />
            <div class="relative p-8 h-1/2">
              <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Developer
              </p>
              <p class="text-2xl font-bold text-white">Tony Wayne</p>
              <div class="mt-64">
                <div class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="relative block bg-black group mr-4">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
            />

            <div class="relative p-8 h-3/4">
              <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Developer
              </p>
              <p class="text-2xl font-bold text-white">Tony Wayne</p>
              <div class="mt-64">
                <div class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="relative block bg-black group mr-4">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
            />

            <div class="relative p-8 h-3/4">
              <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Developer
              </p>
              <p class="text-2xl font-bold text-white">Tony Wayne</p>
              <div class="mt-64">
                <div class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="relative block bg-black group mr-4">
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
            />

            <div class="relative p-8 h-3/4">
              <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Developer
              </p>
              <p class="text-2xl font-bold text-white">Tony Wayne</p>
              <div class="mt-64">
                <div class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <p class="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
    {/* {props.products.map((product) => (
          <Link
            key={product.id}
            href="/products/[id]"
            as={`/products/${product.id}`}
          >
            <motion.div
              className="card"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                key={product.image}
                src={product.image}
                width={300}
              />
              <div className="product-info">
                <h4>{product.name}</h4>
                <span className="category">
                  {product.category
                    ? product.category
                    : (product.category = 'OTHERS')}
                </span>
                <span className="url">{product.url}</span>
              </div>
            </motion.div>
          </Link>
        ))} */}

    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="w-full fixed bottom-0 py-6"
    >
      <div class="flex justify-center pb-6">
        <h2 class="sr-only">Steps</h2>
        <div class="w-4/5">
          <div class="overflow-hidden bg-gray-200 rounded-full">
            <div class="w-1/2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <ol class="mt-4 text-sm font-medium text-gray-500 grid grid-cols-3">
            <li class="flex items-center justify-start text-blue-600">
              <span class="hidden sm:inline"> Details </span>

              <svg
                class="w-6 h-6 sm:w-5 sm:h-5 sm:ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            </li>

            <li class="flex items-center justify-center text-blue-600">
              <span class="hidden sm:inline"> Address </span>

              <svg
                class="w-6 h-6 sm:w-5 sm:h-5 sm:ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </li>

            <li class="flex items-center justify-end">
              <span class="hidden sm:inline"> Payment </span>

              <svg
                class="w-6 h-6 sm:w-5 sm:h-5 sm:ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </li>
          </ol>
        </div>
      </div>
      <div class="flex justify-center pb-8 space-x-4">
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
      </div>
      {/* <span>&copy; {new Date().getFullYear()} Yudai Yamamoto. All Rights.</span> */}
    </motion.div>
  </motion.div>
);

Index.getInitialProps = async function () {
  // microCMSを利用する
  const res = await fetch(
    'https://my-json-server.typicode.com/wrongakram/demo/products'
  );
  const data = await res.json();
  return {
    products: data
  };
};

export default Index;
