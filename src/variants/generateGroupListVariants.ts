const generateGroupListVariants = (index: number) => {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.2 },
    },
  };
};

export default generateGroupListVariants;
