const saveButtonVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  whileTap: { scale: 0.95 },
};

export default saveButtonVariants;
