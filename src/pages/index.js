import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThreeAnimation } from '../libs/3D/ThreeAnimation';
import { Nav } from '../components/common/index';
import { ScrollBar, Header, Profile } from '../components/home/index';
import { fadeIn } from '../libs/motion/fadeIn';
import { fadeOut } from '../libs/motion/fadeOut';
import { Scroll } from '@react-three/drei';

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};


const Index = (props) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <Header />
    <div className="flex justify-center h-screen my-auto mb-8">
      <motion.div
        variants={stagger}
        className="flex justify-start items-center w-full h-full overflow-y-hidden scrollbar-hide"
      >
        <div className="pl-32">
          <Profile />
        </div>
        <div className="row flex flex-1 h-52">
          <a
            href="/products/ghost-whey-vegan"
            class="w-52 h-52 relative block bg-black rounded-xl group mr-3"
          >
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              class="absolute inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-50 rounded-2xl "
            />
            <div class="relative p-8 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Website
              </p>
              <p class="text-base font-bold text-white">
                「PADAYON」General Incorporated Association
              </p>
            </div>
          </a>
          <a
            href="/products/ghost-whey-vegan"
            class="relative block bg-black group mr-4"
          >
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
            />

            <div class="relative p-8 h-3/4">
              <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Developer
              </p>
              <p class="text-base font-bold text-white">
                {' '}
                「Meme」Relaxation Salon
              </p>
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
          <a
            href="/products/ghost-whey-vegan"
            class="relative block bg-black group mr-4"
          >
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
    <div w-full fixed bottom-0 pt-6 pb-2>
      <ScrollBar />
      <Nav />
    </div>
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
