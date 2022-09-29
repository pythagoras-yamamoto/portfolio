import { motion } from 'framer-motion';
import Link from 'next/link';

import { TimeLine } from './TimeLine';

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

export const RightArea = () => {
  return (
    <>
      <div className="product-details py-24">
        <motion.div variants={stagger} className="inner">
          <motion.div variants={fadeInUp}>
            <span className="category"></span>
          </motion.div>
          <motion.h1 className="font-bold text-lg pb-2" variants={fadeInUp}>
            自己紹介
          </motion.h1>
          <motion.p className="text-sm pb-16" variants={fadeInUp}>
            ソフトウェアエンジニア。フロントエンドが主戦場。
            旅好きで、お気に入りの旅先は台北、宮古島。
          </motion.p>

          <motion.h1 className="font-bold text-lg pb-2" variants={fadeInUp}>
            今までの経歴
          </motion.h1>
          <motion.p className="text-sm pb-16" variants={fadeInUp}>
            新潟県出身。最寄りのコンビニは車で10分、冬は積雪が3メートルという陸の孤島、辺境の地で生まれる。
            高校で数理科学に興味を持ち、大学では数学を学ぶが、なんかコレじゃないと感じ大学院で情報科学に転向。
            技術力を糧に面白おかしく生きるエンジニアの生き方や価値観に憧れソフトウェアエンジニアに。
          </motion.p>
          <motion.div className="text-sm pb-16" variants={fadeInUp}>
            <TimeLine />
          </motion.div>

          <motion.div variants={fadeInUp} className="btn-row">
            <Link href="/">
              <a className="add-to-cart bg-blue-500 text-white text-sm rounded-md py-2 px-4">
                ホームに戻る
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
