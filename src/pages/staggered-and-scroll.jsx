import { motion } from "framer-motion";

import blogList from "../data/blogs";
import "../styles/staggered-and-scroll.css";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const StaggeredAndScroll = () => {
  return (
    <div>
      {blogList.map((blog, index) => (
        <Card key={index} {...blog} />
      ))}
    </div>
  );
};

function Card({ image, h2, p, id }) {
  return (
    <motion.div
      className="card"
      id={id}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div className="image-container" variants={imageAnimate}>
        {image}
      </motion.div>
      <motion.h2 variants={textAnimate}>{h2}</motion.h2>
      <motion.p variants={textAnimate}>{p}</motion.p>
    </motion.div>
  );
}

export default StaggeredAndScroll;
