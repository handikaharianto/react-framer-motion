import { motion } from "framer-motion";

const FadeInAndUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
        quisquam eius natus laudantium sunt nisi quibusdam ad deserunt, eligendi
        ut!
      </p>
    </motion.div>
  );
};

export default FadeInAndUp;
