export const itemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom },
  }),
}

export const iconVariants = {
  whileHover: {
    scale: 1.2,
  },
  whileTap: {
    scale: 1.6,
  },
}
