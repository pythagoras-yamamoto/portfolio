import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Scroll } from '@react-three/drei';

import { Nav } from '../components/common/index';
import { ScrollBar, Header, Profile, Card } from '../components/home/index';
import { stagger, fadeSide } from '../libs/motion/fade';

const Index = (props) => (
  <motion.div initial="initial" animate="animate">
    <Header />
    <div className="flex justify-center h-screen my-auto mb-8">
      <motion.div
        variants={fadeSide}
        className="flex justify-start items-center w-full h-full overflow-y-hidden scrollbar-hide"
      >
        <div className="pl-32">
          <Profile />
        </div>
        <div className="row flex flex-1">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </motion.div>
      <ScrollBar />
    </div>
    <div w-full fixed bottom-0 pt-6 pb-2>
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
