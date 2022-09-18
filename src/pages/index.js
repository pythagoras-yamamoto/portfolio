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
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="header"
    >
      <h1 typing-demo>Yudai Yamamoto</h1>
    </motion.div>
    <div className="container">
      <motion.div variants={stagger} className="product-row">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="hoge"
        >
          <h1 typing-demo>Creating Desital Product.</h1>
          <p>
            ソフトウェアエンジニア、山本雄大のポートフォリオサイトです。
            <br />
            主にデジタルプロダクトの企画、制作、開発を行っています。
          </p>
        </motion.div>
        <div className="row">
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
          <Link href="/products/1">
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
          <Link href="/products/1">
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
          <Link href="/products/1">
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
      className="footer"
    >
      <span>&copy; {new Date().getFullYear()} Yudai Yamamoto. All Rights.</span>
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
