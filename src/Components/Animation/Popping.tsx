import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Popping = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3 }}
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
          },
          hidden: {
            opacity: 0,
            scale: 0.8,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Popping;
