import fetch from 'isomorphic-unfetch';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { RightArea, LeftArea } from '../components/about/index';

const Product = (props) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="fullscreen">
      <div className="product">
        <motion.div
          className="img"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <motion.img
            key={props.product.image}
            src={props.product.image}
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          />
        </motion.div>
        <RightArea />
      </div>
    </div>
  </motion.div>
);

Product.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-json-server.typicode.com/wrongakram/demo/products/${id}`
  );
  const product = await res.json();
  return { product };
};

export default Product;
